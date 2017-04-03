let scriptNameArr = [
    '01_hello_world',
    '02_lists_event_listener',
    '03_attribute_class_binding',
    '04_computed_properties',
    '05_components',
    '06_message_component',
    '07_modal_component',
    '08_tabs_component',
    '09_custom_event',
    '10_event_dispatcher',
    '11_named_slot',
    '12_inline_template'
]
let scriptIndex = 11

let scriptEl = document.createElement('script')
scriptEl.src = `./js/${scriptNameArr[scriptIndex]}.js`
document.body.appendChild(scriptEl)
