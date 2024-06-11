import './landing-page.css';
import backgroundImg from '../asset/Back_ground.png'; // Import hình ảnh vào từ đường dẫn
import pei1 from '../asset/PEI1.png'; // Import hình ảnh vào từ đường dẫn
import pei2 from '../asset/PEI2.png'; // Import hình ảnh vào từ đường dẫn
import pei3 from '../asset/PEI3.png'; // Import hình ảnh vào từ đường dẫn
import telegram from '../asset/telegram.png'; // Import hình ảnh vào từ đường dẫn
import x from '../asset/x.png'; // Import hình ảnh vào từ đường dẫn
import arrow from '../asset/arrow.svg'; // Import hình ảnh vào từ đường dẫn
import { Color } from './landingPageColor'; // Import hình ảnh vào từ đường dẫn

function LandingPage() {
    return (
        <div id="landing-page">
            <section className='section-1 flex-col'>
                <img className="background-image" src={backgroundImg} alt="Background" />
                <div className="header">
                    <h1>PEiPEi</h1>
                    <h4>PEPE on sei</h4>
                </div>
                <div className="content flex-row" style={{ flex: 1 }}>
                    <div className="flex-row" style={{ alignItems: 'flex-end' }}>
                        <img className="" src={pei1} alt="Background" style={{ height: '70vh', objectFit: 'cover' }} />
                    </div>
                    <div className="flex-row" style={{ justifyContent: 'flex-end', flex: 1 }}>
                        <div className="flex-col text-section" style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <div className="flex-row" style={{ alignItems: 'flex-end' }}>
                                <h3 style={{ color: Color.red }}>PEiPEi</h3>
                                <h5 style={{ whiteSpace: 'nowrap' }}> is a degenerate gambler</h5>
                            </div>
                            <h5 style={{ whiteSpace: 'nowrap' }}>with anger issues on the sei network </h5>
                            <div className="flex-row button-section" style={{}}>
                                <div className="button flex-colunm" style={{ alignContent: 'center' }}>
                                    <h5>buy PEiPEi</h5>
                                </div>
                                <img className="" src={telegram} alt="Background" />
                                <img className="" src={x} alt="Background" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-2 flex-col'>
                <img className="background-image" src={backgroundImg} alt="Background" />
                <div className="header">
                    <h2>Tokenomic</h2>
                </div>
                <div className="content flex-row" style={{ flex: 1 }}>
                    <div className="flex-row" style={{ justifyContent: 'flex-end', flex: 1 }}>
                        <div className="flex-col text-section" style={{ justifyContent: 'center', alignContent: 'flex-start' }}>
                            <div className="flex-column token-supply" style={{ alignItems: 'flex-end' }}>
                                <h4 style={{ color: '#fff' }}>Token supply:</h4>
                                <h4 style={{ color: Color.red }}>420,690,000.000.000</h4>
                            </div>
                            <h5>No Taxes, No Bullshit. It's that simple.</h5>
                            <h5>LP token are burnt, and contract ownership is renounced</h5>
                        </div>
                    </div>
                    <div className="flex-row" style={{ alignItems: 'flex-end' }}>
                        <img className="" src={pei2} alt="Background" style={{ height: '70vh', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>
            <section className='section-3 flex-col'>
                <img className="background-image" src={backgroundImg} alt="Background" />
                <div className="content flex-row" style={{ flex: 1 }}>
                    <div className="flex-row" style={{ alignItems: 'center' }}>
                        <img className="" src={pei3} alt="Background" style={{ height: '70vh', objectFit: 'cover' }} />
                    </div>
                    <div className="flex-row" style={{ justifyContent: 'flex-end', flex: 1 }}>
                        <div className="flex-col text-section" style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <h2 style={{ color: Color.red }}>socials</h2>
                            <h5 style={{ whiteSpace: 'nowrap' }}>Join the $PEipei community</h5>
                            <div className="flex-row button-section" style={{}}>
                                <img className="telegram" src={telegram} alt="Background" />
                                <img className="x" src={x} alt="Background" />
                                <img className="arrow" src={arrow} alt="arrow"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <p>© 2024 by PeiPei. All rights reserved!</p>
            </section>
        </div>
    );
}

export default LandingPage;
