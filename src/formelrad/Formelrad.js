import '../css/mvp.css';
import {useState} from "react";
import formelrad from "../image/formelradelektronik.gif";
import InputField from "../formular/InputField";

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: ""
    })

    return (
        <>
            <section>
                <header>
                    <h2>Formelrad</h2>
                    <img src={formelrad} width="200" alt="Formelrad"/>
                </header>
                <form>
                    <div>
                        <label>Spannung</label><input></input>
                    </div>
                    <div>
                        <label>Strom</label><input></input>
                    </div>
                    <div>
                        <label>Widerstand</label><input></input>
                    </div>
                    <button type="submit">Calculate</button>
                </form>
            </section>
        </>
    )
}