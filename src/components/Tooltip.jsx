
// eslint-disable-next-line react/prop-types
const Tooltip = ({ text, children }) => {
    return (
        <div className="relative group inline-block">
            {children}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max p-2 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {text}
            </div>
        </div>
    );
};

export default Tooltip;