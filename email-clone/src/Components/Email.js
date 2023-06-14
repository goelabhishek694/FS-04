import React, { useState } from 'react'

function Email() {
    const [currentSelection,setCurrentSelection]=useState('inbox');
    const [emails,setEmails]=useState([{}]);

    const handleSelectionClick=(selection)=>{
        setCurrentSelection(selection);
        console.log(selection);
    }

    const switchParam=(headerType)=>{
        switch(headerType){
            case('inbox'):
                return [
                    {
                        "mId": "guid-1",
                        "unread": true,
                        "subject" : "Training Program",
                        "content" : "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
                    },
                    {
                        "mId": "guid-2",
                        "unread": false,
                        "subject" : "Empower your future",
                        "content" : "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft"
                    }
                ]
            case('spam'):
                return [
                        {
                            "mId": "guid-3",
                            "unread": true,
                            "subject" : "Pre Approved Loan",
                            "content" : "Congratulations ! <u>Credit card<u> is being shipped to you today!"
                        },
                        {
                            "mId": "guid-4",
                            "unread": true,
                            "subject" : "You won a lottery!",
                            "content" : "You have just won the New York official lottery. Please send us your address so that we may start the transfer."
                        }
                    ]
            case('delete'):
                    return[]
            case ('promotions'):
                    return[]
        }
    }
  return (
    <div>
        <div>
            <button onClick={()=>handleSelectionClick('inbox')}>Inbox</button>
            <button onClick={()=>handleSelectionClick('spam')}>Spam</button>
            <button onClick={()=>handleSelectionClick('delete')}>Delete</button>
            <button onClick={()=>handleSelectionClick('promotions')}>Promotions</button>
        </div>
        <div>
            {
                    // switchParam(currentSelection)?(
                        switchParam(currentSelection).map(emailObj=>(
                            <div style={{border:'5px solid red'}}>
                                <h3>{emailObj.subject}</h3>
                                <p>{emailObj.content.slice(0,20)+'...'}</p>
                            </div>
                        ))
                    // ):
                    // (<h1>Data not found</h1>)
                
                
            }
        </div>
    </div>
  )
}

export default Email