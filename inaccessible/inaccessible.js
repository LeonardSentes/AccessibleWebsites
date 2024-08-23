var Accordion = ( function() {
    const _private = {
      cacheDom: () => {
        this.$accordion = $( '.js-accordion' );
        this.$accordionContent = $( '.js-accordion__content' );
        this.$accordionTrigger = $( '.js-accordion__trigger' );
        this.$accordionIcon = $( '.js-accordion__icon' );
      },
      
      bindEvents: () => {
        this.$accordionTrigger.on( 'click', function( e ) {
          e.preventDefault();
          _private.toggleAccordion( $( this ) );
        })
      },
      
      toggleAccordion: ( $thisElem ) => {
        $thisParent = $thisElem.closest( this.$accordion );
        $thisIcon = $thisParent.find( this.$accordionIcon );
        $thisContent = $thisParent.find( this.$accordionContent );
        
        $thisContent.slideToggle( 300 );
        
        $thisElem
          .toggleClass( 'is-expanded' )
          .attr( 'aria-expanded', ( i, attr ) => {
            return attr == 'true' ? 'false' : 'true';
          });
        
        //$thisIcon.toggleClass( 'is-rotated' );
        if ( $thisIcon.hasClass( 'is-rotated' ) ) {
          $thisIcon
            .removeClass( 'is-rotated' )
            .addClass( 'is-unrotated' );
        } else {
          $thisIcon
            .removeClass( 'is-unrotated' )
            .addClass( 'is-rotated' );
        }
      },
      
      preRender: () => {
        this.$accordionContent.slideUp( 0 );
      },
      
      init: () => {
        _private.cacheDom();
        _private.bindEvents();
        _private.preRender();
      }
    };
    
    const _public = {
      init: _private.init,
    };
    
    return _public;
  })();
  
  document.addEventListener( 'DOMContentLoaded', function() {
    Accordion.init(); 
  });