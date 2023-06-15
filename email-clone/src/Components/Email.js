import React, { useState, useEffect } from "react";

function Email() {
    const [currentSelection,setCurrentSelection]=useState('Inbox');
    const [inbox, setInbox] = useState([
      {
        mId: "guid-1",
        unread: true,
        subject: "Training Program",
        content:
          "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
      },
      {
        mId: "guid-2",
        unread: true,
        subject: "Empower your future",
        content:
          "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
      },
    ]);
    const [spam, setSpam] = useState([
      {
        mId: "guid-3",
        unread: true,
        subject: "Pre Approved Loan",
        content:
          "Congratulations ! <u>Credit card<u> is being shipped to you today!",
      },
      {
        mId: "guid-4",
        unread: true,
        subject: "You won a lottery!",
        content:
          "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
      },
    ]);
    // const [emails,setEmails]=useState([{}]);
    const[content,setContent]=useState([{}]);
    const [unreadCount, setUnreadCount] = useState({ inbox: 0, spam: 0 });

    const handleSelectionClick=(selection)=>{
        setCurrentSelection(selection);
        setContent([{}])
        console.log(selection);
    }
    //if a fn is called in UI then never setState over their 
    const switchParam=(headerType)=>{
        switch(headerType){
            case('Inbox'):
                return inbox
            case('Spam'):
                return spam
            case('delete'):
                return[]
            case ('promotions'):
                return []
            default:
                return []
        }
    }

    const handleMailContent=async (id)=>{
        //get specific email using currentSelection and id
        const data=switchParam(currentSelection).filter((emailObj)=>emailObj['mId']==id)
        console.log(data);
        setContent(data);

        //mark my email read 
        const updatedEmails = switchParam(currentSelection).map(emailObj => {
            if(emailObj.mId==id){
                return {...emailObj,unread:false}
            }
            return emailObj
        })
        //update the state 
        // const method = `set${currentSelection}`;
        const updatedUnreadCount = { ...unreadCount };
        updatedUnreadCount[currentSelection] = updatedEmails.filter(emailObj => emailObj.unread).length
        setUnreadCount(updatedUnreadCount);
        if (currentSelection == "Inbox") setInbox(updatedEmails);
        else if (currentSelection == "Spam") setSpam(updatedEmails);
    }

    useEffect(() => {
        const initialUnreadCount = {
          inbox: switchParam("Inbox").filter((emailObj) => emailObj.unread)
            .length,
          spam: switchParam("Spam").filter((emailObj) => emailObj.unread)
            .length,
        };
        setUnreadCount(initialUnreadCount)
    }, [])
    
  return (
    <div>
      <div>
        <button onClick={() => handleSelectionClick("Inbox")}>
          Inbox<span>({unreadCount.inbox})</span>
        </button>
        <button onClick={() => handleSelectionClick("Spam")}>
          Spam<span>({unreadCount.spam})</span>
        </button>
        <button onClick={() => handleSelectionClick("delete")}>Delete</button>
        <button onClick={() => handleSelectionClick("promotions")}>
          Promotions
        </button>
      </div>
      <div>
        {
          // switchParam(currentSelection)?(
          switchParam(currentSelection).map((emailObj) => (
            <div
              onClick={() => handleMailContent(emailObj.mId)}
              style={{ border: "5px solid red", height: "100px" }}
            >
              <h3>{emailObj.subject}</h3>
              <p>{emailObj.content.slice(0, 20) + "..."}</p>
            </div>
          ))
          // ):
          // (<h1>Data not found</h1>)
        }
      </div>
      <div>
        {content ? (
          <div style={{ border: "5px solid red", height: "400px" }}>
            <h3>{content[0].subject}</h3>
            <p>{content[0].content}</p>
          </div>
        ) : (
          <h1>No Mails to Show</h1>
        )}
      </div>
    </div>
  );
}

export default Email