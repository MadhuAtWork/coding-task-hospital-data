import { useState, useRef } from "react";

function Formvalidation() {
    const userN = useRef();
    const userP = useRef();
    const userA = useRef();
    const userD = useRef();

    const [data, setdata] = useState("");
    const [change, setchange] = useState("");
    const [info, setinfo] = useState("");
    const [store, setstore] = useState("");

    const onInputUpdate = (e) => {
        let tempArr = [...store];
        let inputVal1 = userP.current.value;
        let inputVal2 = userN.current.value;
        let inputVal3 = userA.current.value;
        let inputVal4 = userD.current.value;
        let inputVal = [inputVal1, inputVal2, inputVal3, inputVal4]
        tempArr.push(inputVal);
        setstore(tempArr);

        userP.current.value = "";
        userN.current.value = "";
        userA.current.value = "";
        userD.current.value = "";
    }

    const removeonclick = (indx) => (e) => {
        let tempArr = [...store];
        tempArr.splice(indx, 1);
        setstore(tempArr);
    }


    return (
        <div className="container">
            <div className="main">
                <div className="header1">
                    <div className={data ? "home" : "homeslide"} >
                        <div className="submit" >
                            <input placeholder="user name"></input>
                            <input placeholder="password"></input>
                            <button>submit</button>
                            <span onClick={() => setdata(!data)}><h1>&times;</h1></span>
                        </div>
                    </div>
                    <div className="details" onClick={() => setdata("details")}>LOGIN
                    </div>
                </div>

                <div className="header2">
                    <div className={change ? "home" : "homeslide"} >
                        <div className="submit" >
                            <input placeholder="PATIENT ID" ref={userP} text="text" ></input>
                            <input placeholder="NAME" ref={userN} text="text"  ></input>
                            <input placeholder="Age" ref={userA} text="date" ></input>
                            <input placeholder="DISEASE" ref={userD} text="text" ></input>
                            <button onClick={onInputUpdate}>submit</button>
                            <span onClick={() => setchange(!change)}><h1>&times;</h1></span>

                        </div>
                    </div>

                    <div className={info ? "login1" : "login2"} >
                        <div onClick={() => setinfo(!info)}>DETIALS</div>
                   <table>     {
                            store.map(
                                (value, index) => <tr className="table" key={index}>{value}
                                    {/* <th>PATIENT ID:{value}</th>
                                    <th>NAME:{value}</th>
                                    <th>AGE:{value}</th>
                                    <th>DISEASE:{value}</th> */}
                                    <span onClick={removeonclick(index)}>&times;</span></tr>
                            )
                        }</table>
                    </div>

                    <div className="login" onClick={() => setchange("login")}>HOME</div>
                </div>
            </div>

            <div className="section" >

                <img src="doctor.1.jpg"></img>
            </div>
        </div>
    )
}
export default Formvalidation;