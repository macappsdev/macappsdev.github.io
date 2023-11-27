/*!
 * js util written by charley
 * 2017.10.21
 */
//
// Exported functions
//
/* exported get_item_at_index_of_array */
/* exported set_item_at_index_of_array */

function get_item_at_index_of_array(array, index)
{
    "use strict";
    return array[index];
}

function set_item_at_index_of_array(array, index, item_value)
{
    "use strict";
    array[index] = item_value;
}
