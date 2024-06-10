function Filter(props) {
    let data = props.filterData;
    let setCategory = props.setCategory;
    // console.log(data);
    return (
        data.map((value) => (
            <button key={value.id} onClick={() => {
                setCategory(value.title)
            }}>{value.title}</button>
        ))
    )
}

export default Filter;