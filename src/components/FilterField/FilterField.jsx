

export const FilterField = ({value, onChangeFilter}) => {
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={onChangeFilter} />
        </>
    )
}