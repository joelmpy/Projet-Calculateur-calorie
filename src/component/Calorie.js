import Man from "../assets/homme.png";
import Woman from "../assets/femme.png";
import { useState } from "react";

function Calorie() {

    const [gender, setGender] = useState();
    const [weight, setWeight] = useState(0);
    const [heigt, setHeight] = useState(0);
    const [age, setAge] = useState(0);
    const [activity, setActivity] = useState(0);
    const [result, setResult] = useState(0);
    const [formValid, setFormValid] = useState(false)
    const [messageError, setMessageError] = useState('');

    // Recupere elements event //

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    }

    const handleChangeHeight = (event) => {
        setHeight(event.target.value);
    }

    const handleChangeWeight = (event) => {
        setWeight(event.target.value)
    }

    console.log(age, heigt, weight, gender, activity)

    

    // function button du resultat //

    const toggleFunction = (event) => {
        setFormValid(true)
        let totalCalories;
        if (weight === "" || heigt === "" || 80 < age || age < 15) {
            alert('Veuillez remplir tout les champs')
            setMessageError("Veuillez remplir ce champs svp pour le calcule")
        } else if (gender === 'homme' && activity === "1") {
            totalCalories = 1.2 * (13.397 * weight + (4.799 * heigt) - (5.677 * age) + 88.362)
            setResult(totalCalories)
        } else if (gender === 'homme' && activity === "2") {
            totalCalories = 1.3 * (13.397 * weight + (4.799 * heigt) - (5.677 * age) + 88.362)
            setResult(totalCalories)
        } else if (gender === 'homme' && activity === "3") {
            totalCalories = 1.4 * (13.397 * weight + (4.799 * heigt) - (5.677 * age) + 88.362)
            setResult(totalCalories)
        } else if (gender === 'homme' && activity === "4") {
            totalCalories = 1.5 * (13.397 * weight + (4.799 * heigt) - (5.677 * age) + 88.362)
            setResult(totalCalories)
        }

        else if (gender === 'femme' && activity === "1"){
            totalCalories =  1.2 * (9.247 * weight + (3.098 * heigt) - (4.330 * age) + 447.593)
            setResult(totalCalories)
        }    else if (gender === 'femme' && activity === "2"){
            totalCalories =  1.3 * (9.247 * weight + (3.098 * heigt) - (4.330 * age) + 447.593)
            setResult(totalCalories)
        }    else if (gender === 'femme' && activity === "3"){
            totalCalories =  1.4 * (9.247 * weight + (3.098 * heigt) - (4.330 * age) + 447.593)
            setResult(totalCalories)
        }    else if (gender === 'femme' && activity === "4"){
            totalCalories =  1.5 * (9.247 * weight + (3.098 * heigt) - (4.330 * age) + 447.593)
            setResult(totalCalories)
        }else (
            setResult()
        )

        console.log(totalCalories)
    }

    const reload = () => {
        setActivity(0)
        setResult(0)
        setAge(0)
        setHeight(0)
        setWeight(0)
    }

    return (
        <div className="app">
            <div className="title">
                <h1 className="center">Calcul des calories journalières</h1>
                <span className="sous-title">
                    Pour effectuer un calcul exact, nous avons besoin de quelques infos
                    basiques de votre part{" "}
                </span>
            </div>

            <div className="calculator-step">

                <div className="calculator-step-1">
                    <h2 className="title-calculator">Quel est votre sexe</h2>
                    <div className="wrapper-gender">
                        <div className="wrapper-icon">

                            <img src={Man}></img>
                            <div className={"btn" + (gender === 'homme' ? ' active ' : "")} onClick={() => {
                                setGender('homme')
                            }}>Un Homme </div>
                        </div>

                        <div className="wrapper-icon">
                            <img src={Woman}></img>
                            <div className={"btn" + (gender === 'femme' ? ' active ' : "")} onClick={() => {
                                setGender('femme')
                            }}>Une Femme</div>
                        </div>
                    </div>
                </div>


                <div className={"calculator-step-1" + (age < 15 && formValid ? " active-error ": "" )}>
                    <h2 className="title-calculator">Quel age avez vous</h2>
                    <div className="wrapper-old">
                        <div className="input-old">
                            <input type="number" placeholder="21" onChange={handleChangeAge} value={age > 0 ? age : ""} />
                            <p>ans</p>
                        </div>
                    </div>
                </div>

                <div className={"calculator-step-1" + (heigt === 0 && formValid ? " active-error ": "" )}>
                    <h2 className="title-calculator">Combien mesurez-vous ?</h2>
                    <div className="wrapper-old">
                        <div className="input-old">
                            <input type="number" placeholder="180" onChange={handleChangeHeight} value={heigt > 0 ? heigt : ""} />
                            <p>cm</p>
                        </div>
                    </div>
                </div>


                <div className={"calculator-step-1" + (weight === 0 && formValid ? " active-error ": "" )}>
                    <h2 className="title-calculator">Combien pesez-vous ?</h2>
                    <div className="wrapper-old">
                        <div className="input-old">
                            <input type="number" placeholder="75" onChange={handleChangeWeight} value={weight > 0 ? weight : ""} />
                            <p>kilo</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className= {"calculateur-step-5" + (activity === 0 && formValid ? " active-error " : "")}>

                <div className="calculateur-activity">

                    <h2 className="title-calculator">Évaluez votre activité journalière</h2>

                    <div className="activity-list">

                        <div className="wrapper-activity">
                            {/* <img src={Woman}></img> */}
                            <div className={"btn" + (activity === '1' ? ' active-btn ' : "")} onClick={() => {
                                setActivity('1')
                            }}> Peu actif</div>
                            <p>Assis la plupart du temps (par ex : travail de bureau)</p>
                        </div>

                        <div className="wrapper-activity">
                            {/* <img src={Woman}></img> */}
                            <div className={"btn" + (activity === '2' ? ' active-btn ' : "")} onClick={() => {
                                setActivity('2')
                            }}>Moyennement actif</div>
                            <p>Debout la plupart du temps (par ex : professeur, caissier)</p>
                        </div>

                        <div className="wrapper-activity">
                            {/* <img src={Woman}></img> */}
                            <div className={"btn" + (activity === '3' ? ' active-btn ' : "")} onClick={() => {
                                setActivity('3')
                            }}>Actif</div>
                            <p>Marche la plupart du temps (par ex : serveur, vendeur)</p>
                        </div>

                        <div className="wrapper-activity">
                            {/* <img src={Woman}></img> */}
                            <div className={"btn" + (activity === '4' ? ' active-btn ' : "")} onClick={() => {
                                setActivity('4')
                            }}>Très actif</div>
                            <p>Activité très physique (par ex : ouvrier)</p>
                        </div>

                    </div>

                </div>

            </div>

            {
                result > 0 ? 
            <section className="calculator-result-wrapper">
                <div className="calculator-result">
                    <h2 className="title-result">Votre résultat personnalisé</h2>
                    <div className="wrapper-result">
                        <div className="result">
                            <span>{Math.floor(result)}</span>
                            <p>kcal</p>
                        </div>
                    </div>
                </div>
            </section>
            : null
            }
                {
                result === 0 ?   
                <button onClick={toggleFunction}>Calculer apport calorique</button>
                :
                <div>
                <button className="reload" onClick={reload}>Supprimer</button>
                </div>   
            }
        </div>
    );
}

export default Calorie;

