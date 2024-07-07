const root = ReactDOM.createRoot(document.getElementById("root"))



function App(){
    //create state to hold form data in the form of obj. properties.
    const [isShown,setIsShown]= React.useState({firstName:"",
                                                lastName:"",
                                                message:"",
                                                check:true,
                                                fieldInput:"",
                                                optionBox:""})
    
    function changeHandler(e){
        //using ternary to find out which form-field-variavle to update and using required attributes to get and put data
        setIsShown(stateObj=>(
            e.target.id=="firstName" ? {...stateObj,firstName:e.target.value} :
            e.target.id=="lastName" ? {...stateObj,lastName:e.target.value} :
            e.target.id=="message" ? {...stateObj,message:e.target.value} :
            e.target.id=="check" ? {...stateObj,check:!isShown.check} :
            e.target.id=="fieldInput" ? {...stateObj,fieldInput:e.target.value} :
            e.target.id=="optionBox" ? {...stateObj,optionBox:e.target.value} :
            stateObj))
        console.log(isShown)
    }

    return(
        //source of truth is 1, as values and integrated with state.
        //using onChange handler to handle any change
        <>
        {/* creating a form with onSubmit insted of action and link*/ }
            <form className="form" onSubmit={submitForm}>
                <input type="text" palceholder="first" onChange={changeHandler} id="firstName" value={isShown.firstName}/>
                <input type="text" palceholder="second" onChange={changeHandler} id="lastName" value={isShown.lastName}/>
                <textarea type="text" palceholder="message.." onChange={changeHandler} id="message"  value={isShown.message}/>
                <section>
                    <input type="checkbox" checked={isShown.check} onChange={changeHandler} id="check"/>
                    <label>Tick</label>
                </section>

                <fieldset>
                    <legend>Box</legend>
                    <section>
                        {/* using same name property to enforce only select one selection */}
                          {/*using checked to find-out which item should be markred and which should not*/}
                        <input type="radio" id="fieldInput" name="fieldInput" value="inp 1" checked={isShown.fieldInput=="inp 1"?true:false} onChange={changeHandler}/>
                        <label>inp 1</label>
                    </section>
                    <section>
                        <input type="radio" id="fieldInput" name="fieldInput" value="inp 2" checked={isShown.fieldInput=="inp 2"?true:false} onChange={changeHandler}/>
                        <label>inp 2</label>
                    </section>
                    <section>
                        <input type="radio" id="fieldInput" name="fieldInput" value="inp 3" checked={isShown.fieldInput=="inp 3"?true:false} onChange={changeHandler}/>
                        <label>inp 3</label>
                    </section>
                </fieldset>

                <select id="optionBox" value={isShown.optionBox} onChange={changeHandler} name="optionBox">
                    <option value="opt 1">opt 1</option> 
                    <option value="opt 2">opt 2</option>
                    <option value="opt 3">opt 3</option>
                </select>

                <button>Submit</button>
            </form>
        </>
    )

    function submitForm(e){
        e.preventDefault()
        console.log(isShown)
        // below () clears it up
        setIsShown({firstName:"",lastName:"",message:"",check:true,fieldInput:"",optionBox:""})
    }
}

root.render(
    <>  
        <App />
    </>
) 


