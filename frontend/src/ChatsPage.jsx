import{MultiChatSocket,MultiChatWindow ,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps=useMultiChatLogic
    ('89cd407b-7794-43e1-83f0-6f6d36199081'
    ,props.user.username,
    props.user.secret);
    return ( <div style={{height:'100vh'}}> 
    <MultiChatSocket {... chatProps}/>
    <MultiChatWindow {... chatProps} style={{height:'100vh'}}/>
    </div>
    )
}
export default ChatsPage