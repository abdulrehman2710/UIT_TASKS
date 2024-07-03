function List(props) {

  return (
    <div>
      <ul>
        {props.data.map((value, index) => {
          return (
            <li key={index}>
              {index  + "-" + value}
              <button onClick={() => props.onDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
