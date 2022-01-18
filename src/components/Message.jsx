import { TrashIcon } from "@heroicons/react/solid";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectChannelId } from "../features/channelSlice";
import { db } from "../firebase";

const Message = ({ id, message, timestamp, name, photoURL, email, user, channelId }) => {
    return (
        <div className='flex items-center p-1 pl-5 my-5 mr-2 hover:bg-[#32353b] group'>
            <img
                src={photoURL}
                alt='user image'
                className='h-10 rounded-full cursor-pointer hover:shadow-2xl '
            />
            <div className='flex flex-col ml-2 '>
                <h4 className='flex items-center space-x-2 font-medium'>
                    <span className='hover:underline text-white text-sm cursor-pointer'>
                        {name}
                    </span>
                    <span className='text-[#727673] text-xs'>
                        {moment(timestamp?.toDate().getTime()).format("lll")}
                    </span>
                </h4>
                <p className='text-sm text-[#dcddde]'>{message}</p>
            </div>
            {user?.email === email && (
                <div
                    onClick={() =>
                        db
                            .collection("channels")
                            .doc(channelId)
                            .collection("messages")
                            .doc(id)
                            .delete()
                    }
                    className='hover:bg-[#ed4245] p-1 ml-auto rounded-sm text-[#ed4245] cursor-pointer hover:text-white'
                >
                    <TrashIcon className='h-5 hidden group-hover:inline' />
                </div>
            )}
        </div>
    );
};

export default Message;
