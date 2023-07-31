import { useState } from "react";
import Lettle from "./components/Lettle/Lettle";
import SwitchHeart from "./components/Switch/Switch";
import ImageHeart from "./imageHeart";

function App() {
    const [_open, _setOpen] = useState(false);
    const [_openNoti, _setOpenNoti] = useState(false);
    const [_more, _setMore] = useState(false);
    return (
        <div className="App">
            {_openNoti && (
                <div className="__page">
                    <Lettle _open={_open} />
                    <SwitchHeart
                        toggle={_setOpen}
                        _open={_open}
                        _setMore={_setMore}
                    />
                    {!_open && (
                        <div className="__arrow_button">
                            <span>Press Heart</span>
                            <img
                                alt="arrow"
                                src={require("./img/arrow.png")}
                            ></img>
                        </div>
                    )}
                </div>
            )}
            {!_openNoti && (
                <div className="__img __img_2">
                    <img
                        alt="anh T"
                        src={require("./img/q2.jpg")}
                        className="__img_image"
                    />
                    <div className="__love_you __love_you_tiny __pos_ani_0 __right_3"></div>
                    <div className="__love_you __love_you_small __pos_ani_3 __right_2"></div>
                    <div className="__love_you __love_you_medium __pos_ani_2 __right_1"></div>
                    <div className="__love_you __love_you_larger __pos_ani_1 __left_3"></div>
                    <div className="__love_you __love_you_tiny __pos_ani_1 __left_3"></div>
                    <div className="__love_you __love_you_small __pos_ani_4 __left_2"></div>
                    <div className="__love_you __love_you_medium __pos_ani_2 __left_1"></div>
                    <div className="__love_you __love_you_larger __pos_ani_1 __left_1"></div>
                    <div className="__love_you __love_you_tiny __pos_ani_0 __mid_1"></div>
                    <div className="__love_you __love_you_small __pos_ani_1 __mid_2"></div>
                    <div className="__love_you __love_you_tiny __pos_ani_2 __mid_3"></div>
                    <div className="__love_you __love_you_tiny __pos_ani_4 __mid_3"></div>
                    <div className="__love_you __love_you_tiny __pos_ani_1 __mid_5"></div>
                    <div className="__love_you __love_you_small __pos_ani_2 __mid_4"></div>
                    <div className="__love_you __love_you_tiny __pos_ani_1 __mid_5"></div>
                    <div className="__love_you __love_you_tiny __pos_ani_4 __mid_1"></div>
                    <div className="__love_you __love_you_small __pos_ani_1 __mid_2"></div>
                    <div className="__love_you __love_you_tiny __pos_ani_3 __mid_3"></div>
                    z
                    <div className="__love_you __love_you_tiny __pos_ani_4 __mid_3"></div>
                    <div className="__love_you __love_you_tiny __pos_ani_2 __mid_5"></div>
                    <div className="__love_you __love_you_small __pos_ani_0 __mid_4"></div>
                    <div className="__love_you __love_you_tiny __pos_ani_4 __mid_5"></div>
                </div>
            )}

            {!_openNoti && <div className="__name">༺🍃☞ 𝓣𝓱𝓪𝓷𝓱 𝓣𝓱ư ☪ツ</div>}
            <ImageHeart />

            {_open && (
                <img
                    className="__back"
                    src={require("./img/back.png")}
                    onClick={() => {
                        _setOpen(false);
                        _setOpenNoti(false);
                    }}
                />
            )}
            {!_openNoti && (
                <img
                    className="__mail"
                    src={require("./img/mail.png")}
                    onClick={() => _setOpenNoti(true)}
                />
            )}
        </div>
    );
}

export default App;
