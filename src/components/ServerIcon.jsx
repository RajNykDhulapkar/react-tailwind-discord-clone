const ServerIcon = ({ image }) => {
    return (
        <img
            className='h-12 cursor-pointer rounded-full transition-all
            duration-150 ease-out hover:rounded-2xl'
            src={image}
            alt=''
            srcset=''
        />
    );
};

export default ServerIcon;
