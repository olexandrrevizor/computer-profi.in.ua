/* global _wpMediaViewsL10n, MediaElementPlayer, _wpMediaGridSettings */
(function($, _, Backbone, wp) {
	// Local reference to the WordPress media namespace.
	var media = wp.media, l10n;

	// Link localized strings and settings.
	if ( media.view.l10n ) {
		l10n = media.view.l10n;
	} else {
		l10n = media.view.l10n = typeof _wpMediaViewsL10n === 'undefined' ? {} : _wpMediaViewsL10n;
		delete l10n.settings;
	}

	/**
	 * wp.media.controller.EditAttachmentMetadata
	 *
	 * A state for editing an attachment's metadata.
	 *
	 * @constructor
	 * @augments wp.media.controller.State
	 * @augments Backbone.Model
	 */
	media.controller.EditAttachmentMetadata = media.controller.State.extend({
		defaults: {
			id:      'edit-attachment',
			// Title string passed to the frame's title region view.
			title:   l10n.attachmentDetails,
			// Region mode defaults.
			content: 'edit-metadata',
			menu:    false,
			toolbar: false,
			router:  false
		}
	});

	/**
	 * wp.media.view.MediaFrame.Manage
	 *
	 * A generic management frame workflow.
	 *
	 * Used in the media grid view.
	 *
	 * @constructor
	 * @augments wp.media.view.MediaFrame
	 * @augments wp.media.view.Frame
	 * @augments wp.media.View
	 * @augments wp.Backbone.View
	 * @augments Backbone.View
	 * @mixes wp.media.controller.StateMachine
	 */
	media.view.MediaFrame.Manage = media.view.MediaFrame.extend({
		/**
		 * @global wp.Uploader
		 */
		initialize: function() {
			var self = this;
			_.defaults( this.options, {
				title:     '',
				modal:     false,
				selection: [],
				library:   {}, // Options hash for the query to the media library.
				multiple:  'add',
				state:     'library',
				uploader:  true,
				mode:      [ 'grid', 'edit' ]
			});

			this.$body = $( document.body );
			this.$window = $( window );
			this.$adminBar = $( '#wpadminbar' );
			this.$window.on( 'scroll resize', _.debounce( _.bind( this.fixPosition, this ), 15 ) );
			$( document ).on( 'click', '.add-new-h2', _.bind( this.addNewClickHandler, this ) );

			// Ensure core and media grid view UI is enabled.
			this.$el.addClass('wp-core-ui');

			// Force the uploader off if the upload limit has been exceeded or
			// if the browser isn't supported.
			if ( wp.Uploader.limitExceeded || ! wp.Uploader.browser.supported ) {
				this.options.uploader = false;
			}

			// Initialize a window-wide uploader.
			if ( this.options.uploader ) {
				this.uploader = new media.view.UploaderWindow({
					controller: this,
					uploader: {
						dropzone:  document.body,
						container: document.body
					}
				}).render();
				this.uploader.ready();
				$('body').append( this.uploader.el );

				this.options.uploader = false;
			}

			this.gridRouter = new media.view.MediaFrame.Manage.Router();

			// Call 'initialize' directly on the parent class.
			media.view.MediaFrame.prototype.initialize.apply( this, arguments );

			// Append the frame view directly the supplied container.
			this.$el.appendTo( this.options.container );

			this.createStates();
			this.bindRegionModeHandlers();
			this.render();

			// Update the URL when entering search string (at most once per second)
			$( '#media-search-input' ).on( 'input', _.debounce( function(e) {
				var val = $( e.currentTarget ).val(), url = '';
				if ( val ) {
					url += '?search=' + val;
				}
				self.gridRouter.navigate( self.gridRouter.baseUrl( url ) );
			}, 1000 ) );
		},

		/**
		 * Create the default states for the frame.
		 */
		createStates: function() {
			var options = this.options;

			if ( this.options.states ) {
				return;
			}

			// Add the default states.
			this.states.add([
				new media.controller.Library({
					library:            media.query( options.library ),
					multiple:           options.multiple,
					title:              options.title,
					content:            'browse',
					toolbar:            'select',
					contentUserSetting: false,
					filterable:         'all',
					autoSelect:         false
				})
			]);
		},

		/**
		 * Bind region mode activation events to proper handlers.
		 */
		bindRegionModeHandlers: function() {
			this.on( 'content:create:browse', this.browseContent, this );

			// Handle a frame-level event for editing an attachment.
			this.on( 'edit:attachment', this.openEditAttachmentModal, this );

			this.on( 'select:activate', this.bindKeydown, this );
			this.on( 'select:deactivate', this.unbindKeydown, this );
		},

		handleKeydown: function( e ) {
			if ( 27 === e.which ) {
				e.preventDefault();
				this.deactivateMode( 'select' ).activateMode( 'edit' );
			}
		},

		bindKeydown: function() {
			this.$body.on( 'keydown.select', _.bind( this.handleKeydown, this ) );
		},

		unbindKeydown: function() {
			this.$body.off( 'keydown.select' );
		},

		fixPosition: function() {
			var $browser, $toolbar;
			if ( ! this.isModeActive( 'select' ) ) {
				return;
			}

			$browser = this.$('.attachments-browser');
			$toolbar = $browser.find('.media-toolbar');

			// Offset doesn't appear to take top margin into account, hence +16
			if ( ( $browser.offset().top + 16 ) < this.$window.scrollTop() + this.$adminBar.height() ) {
				$browser.addClass( 'fixed' );
				$toolbar.css('width', $browser.width() + 'px');
			} else {
				$browser.removeClass( 'fixed' );
				$toolbar.css('width', '');
			}
		},

		/**
		 * Click handler for the `Add New` button.
		 */
		addNewClickHandler: function( event ) {
			event.preventDefault();
			this.trigger( 'toggle:upload:attachment' );
		},

		/**
		 * Open the Edit Attachment modal.
		 */
		openEditAttachmentModal: function( model ) {
			// Create a new EditAttachment frame, passing alon