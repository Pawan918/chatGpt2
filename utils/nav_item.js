const data = () => {
    return {
        navItems : [
            {   
                id: 0,
                label: "New Chat",
                icon: 'i-mdi-add',
                isEditing: false,
                action: 'add',
                active: true,
            }
        ],
        navItemsSub: [],
    }
}

export default data;