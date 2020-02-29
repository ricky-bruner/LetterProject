
export default Object.create(null, {
    handleFieldChange:{ 
        value: (component, e) => {
            const stateToChange = {}
            stateToChange[e.target.id] = e.target.innerText
            component.setState(stateToChange)
        }
    }
})