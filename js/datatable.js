/* ------------------------------------------------------------------------------
 *
 *  # Basic datatables
 *
 *  Demo JS code for datatable_basic.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DatatableBasic = function () {


    //
    // Setup module components
    //

    // Basic Datatable examples
    var _componentDatatableBasic = function () {
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }


        // Basic datatable
        $('.datatable-basic').DataTable({
            info: false,
            searching: false,
            lengthChange: false
        });


    };

    // Select2 for length menu styling



    //
    // Return objects assigned to module
    //

    return {
        init: function () {
            _componentDatatableBasic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function () {
    DatatableBasic.init();
});