const destinationTypeSeeds = [
        {
        id: 1,
        type_name: "Historical Landmark",
        type_parent_id: null, // No parent (top-level category)
        },
        {
        id: 2,
        type_name: "Museum",
        type_parent_id: 1, // Subcategory under "Historical Landmark"
        },
        {
        id: 3,
        type_name: "National Park",
        type_parent_id: null,
        },
    ];

    export {destinationTypeSeeds}
    