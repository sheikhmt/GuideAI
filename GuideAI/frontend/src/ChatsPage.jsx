import {PrettyChatWindow} from 'react-chat-engine-pretty'

    const ChatsPage=(props)=>{
       ;
    return(
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
            projectId='b531f31a-2538-4ea7-af24-b4095f4ce680' 
            username={props.user.username}
            secret={props.user.secret}
             style={{ height: '100%'}}
             />
            </div>
    )
}
export default ChatsPage