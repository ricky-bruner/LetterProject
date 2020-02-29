import OptionsFactory from "./OptionsFactory";

export default Object.create(null, {
    getTextMenu: {
        value: {
            title: "Text Section Options",
            saved: false,
            placement: "",
            options: [
                { 
                    data: "typeSelected",
                    name: "Type",
                    options: OptionsFactory.chunkTypes,
                    type: "select",
                    set: false
                },
                {
                    data: "fontSelected",
                    name: "Font",
                    options: OptionsFactory.fonts,
                    type: "select",
                    set: false
                },
                {
                    data: "fontSizeSelected",
                    name: "Font Size",
                    options: OptionsFactory.fontSizes,
                    type: "select",
                    set: false
                },
                {
                    data: "styleSelected",
                    name: "Style",
                    options: OptionsFactory.textStyles,
                    type: "select",
                    set: false
                },
                {
                    data: "placementSelected",
                    name: "Arrangement",
                    options: OptionsFactory.placementOptions,
                    type: "select",
                    set: false
                },
                {
                    data: "spaceAdded",
                    name: "Add Space After",
                    options: [],
                    type: "checkbox",
                    set: false
                },
                {
                    data: "dataProperty",
                    name: "Data Generated",
                    options: [],
                    type: "checkbox",
                    set: false
                }
            ]
        }
    },
    getLineMenu: {
        value: {
            title: "Line Options",
            saved: false,
            placement: "",
            options: [
                { 
                    data: "indentSelected",
                    name: "Indent",
                    options: OptionsFactory.indentOptions,
                    type: "select",
                    set: false
                },
                {
                    data: "alignmentSelected",
                    name: "Alignment",
                    options: OptionsFactory.alignmentOptions,
                    type: "select",
                    set: false
                },
                {
                    data: "placementSelected",
                    name: "Arrangement",
                    options: OptionsFactory.placementOptions,
                    type: "select",
                    set: false
                }
            ]
        }
    }
})