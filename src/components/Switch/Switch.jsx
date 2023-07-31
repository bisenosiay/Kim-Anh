import classNames from "classnames";

function SwitchHeart(props) {
    const handleRenderImg = () => {
        props.toggle((old) => !old);
        setTimeout(() => {
            props._setMore(true);
            clearTimeout();
        }, 7000);
    };
    return (
        <label
            className={classNames("__heart_switch", {
                __heart_switch_animation: props._open,
            })}
        >
            <input type="checkbox" />
            <svg
                viewBox="0 0 33 23"
                fill="white"
                onClick={() => handleRenderImg()}
            >
                <path d="M23.5,0.5 C28.4705627,0.5 32.5,4.52943725 32.5,9.5 C32.5,16.9484448 21.46672,22.5 16.5,22.5 C11.53328,22.5 0.5,16.9484448 0.5,9.5 C0.5,4.52952206 4.52943725,0.5 9.5,0.5 C12.3277083,0.5 14.8508336,1.80407476 16.5007741,3.84362242 C18.1491664,1.80407476 20.6722917,0.5 23.5,0.5 Z"></path>
            </svg>
        </label>
    );
}
export default SwitchHeart;
