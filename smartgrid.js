var smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
var settings = {
    oldSizeStyle: false,
    filename: '_smart-grid',
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '10px', /* gutter width px || % */
    container: {
        maxWidth: '960px', /* max-width оn very large screen */
        fields: '15px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
            fields: '15px' /* side fields */
        },
        md: {
            width: '960px',
            fields: '15px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        },
        xs: {
            width: '560px',
            fields: '15px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    },
        mixinNames: {
        "container": "container"
    }
};
 
smartgrid('./app/sass', settings);