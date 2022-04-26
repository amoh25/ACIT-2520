function IPhone(props) {
  return (
    <div>
    <img src={props.pic} />
  <h3>{props.title}</h3>
  <p>Price : ${props.price}</p>
</div>

  );
}
export default IPhone;
