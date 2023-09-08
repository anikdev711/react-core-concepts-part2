
export default function Friend({friend}){
    // console.log(friend);
    const {name, email} = friend;
    return(
        <div className="box">
            <h6>Name: {name}</h6>
            <h6>Email: {email}</h6>
        </div>
    )
}