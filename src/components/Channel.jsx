import { HashtagIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setChannelInfo } from "../features/channelSlice";

const Channel = ({ id, channelName }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const setChannel = () => {
        dispatch(
            setChannelInfo({
                channelId: id,
                channelName: channelName,
            })
        );
        history.push(`/channels/${id}`);
    };
    return (
        <div
            className='flex items-center font-medium cursor-pointer
         hover:bg-[#3a3c43] p-1 rounded-md hover:text-white'
            onClick={setChannel}
        >
            <HashtagIcon className='h-5 mr-2' />
            {channelName}
        </div>
    );
};

export default Channel;
