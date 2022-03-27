import React from "react"
import "./style/Header.css"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Sinauw from"../src/img/Sinauw.png"
import Hero from "./img/hero.png"
import Lupa from "./img/search.png"
import Hero1 from "./img/hero1.png"
import Hero2 from "./img/hero2.png"
import Hero3 from "./img/hero3.png"
import Hero4 from "./img/hero4.png"
import People from "./img/people.png"
import Teacher from "./img/teacher.png"
import health from "./img/health.png"
import laptop from "./img/laptop.png"
import man1 from "./img/man1.png"
import man2 from "./img/man2.png"
import man3 from "./img/man3.png"
import man4 from "./img/man4.png"
import apps from "./img/apps.png"
import code from "./img/code.png"
import android from "./img/android.png"
import yusuf from "./img/yusuf.png"
import str from "./img/str.png"
import key from "./img/key.png"
import star from "./img/star.png"
import king from "./img/king.png"
import sq from "./img/sq.png"
import phone from "./img/phone.png"
import play from "./img/play.png"
import apple from "./img/apple.png"
import facebook from "./img/facebook.png"
import twitter from "./img/twitter.png"
import instagram from "./img/instagram.png"
function Header() {
    return(
        <>

        <div className="hea">
            <div className="hea9">
                <div className="hea1"><img src={Sinauw} alt="..."/></div>
                <div className="hea2">
                    <div className="hea3"><a href="#">Uy</a></div>
                    <div className="hea4"><a href="#">Kurslar</a></div>
                    <div className="hea5"><a href="#">Vebinar</a></div>
                    <div className="hea6"><a href="#">Narxlash</a></div>
                </div>
                <div className="hea7"><a href="#"><button>Tizimga kirish</button></a></div>
        </div>
        <div className="hea8">
        <Fade left>
            <div className="hea10"><img src={Hero} alt="" /></div>
        </Fade>
        <Fade right>
            <div className="hea11">
                <div className="hea12">Karyera yo'lingizni <br/> Oshirish uchun <br /> Ko'nikmalaringizni oshiring</div>
                <div className="hea13">Darajani ko'tarmoqchi bo'lganlar uchun bizda katta narsa bor!</div>
                <div className="hea14"><input type="еуче" placeholder="Nimani o'rganmoqchisiz"/></div>
                <div className="hea15"><button><img src={Lupa} alt="" /></button></div>
                <div className="hea16"><button>
                    <img src={Hero1} alt="" />
                    <img src={Hero2} alt="" />
                    <img src={Hero3} alt="" />
                    <img src={Hero4} alt="" />
                    80 mingdan ortiq <br /> Talabalar qo'shildi!    
                    </button></div>
            </div>
            </Fade>
        </div>
        </div>

        <Flip bottom>
        <div className="foo">
            <div className="foo1">
                <div className="foo2">
                    <div className="foo3"><img src={People} alt="" /></div>
                    <div className="foo4">Yangi do'stlar orttiring</div>
                </div>
                <div className="foo5">Siz o'qiyotgan ba'zi darslarda yangi do'stlar bilan tanishasiz. <br /> Ularga salom ayting va do'stlashing. <br /> Bu juda iliq do'stlik bo'ladi!</div>
            </div>
            <div className="foo6">
                <div className="foo7">
                    <div className="foo8"><img src={Teacher} alt="" /></div>
                    <div className="foo9">Mutaxassis va qiziqarli murabbiy</div>
                </div>
                <div className="foo10">Qattiq o'rganing va dam olishni ham unutmang. <br /> Mutaxassis murabbiylarimiz bilan materiallar <br /> yoki darslarni o'rganing va zavqlaning.</div>
            </div>
            <div className="foo11">
                <div className="foo12">
                    <div className="foo13"><img src={health} alt="" /></div>
                    <div className="foo14">Moslashuvchan kirish</div>
                </div>
                <div className="foo15">Materiallar yoki darslarga veb-saytimiz orqali ham mobil orqali <br /> Osongina kirishingiz mumkin. Unga hamma joyda va har doim kiring, <br /> o'rganishingiz uchun cheklov yo'q!</div>
            </div>
        </div>
        </Flip>

        <div className="bip">
        <Bounce>
            <div className="bip1">Siz nimani o'rganmoqchisiz?</div>
            <div className="bip2">Sizga kerak bo'lgan to'g'ri sinfni tanlang. Keyin o'qishdan zavqlaning.</div>
        </Bounce>
            <div className="bip3">
                <div className="bip4">
                    <div className="bip5"><img src={laptop} alt="" /></div>
                    <div className="bip6">Texnologiya</div>
                    <div className="bip7">Raqamli marketing strategiyasi</div>
                    <div className="bip8">Ushbu kurs sizga asosiy jarayonlarni chuqurroq tushunishga qaratilgan ...</div>
                    <div className="bip9">
                        <div className="bip10"><img src={man1} alt="" /></div>
                        <div className="bip11">Joey Per</div>
                    </div>
                </div>
                <div className="bip12">
                    <div className="bip13"><img src={apps} alt="" /></div>
                    <div className="bip14">Dizayn</div>
                    <div className="bip15">Figma asosiy</div>
                    <div className="bip16">Ushbu darslar va mashqlar Figma bilan loyihalashni boshlashingizga yordam beradi</div>
                    <div className="bip17">
                        <div className="bip18"><img src={man2} alt="" /></div>
                        <div className="bip19">Araya Sheila</div>
                    </div>
                </div>
                <div className="bip20">
                    <div className="bip21"><img src={code} alt="" /></div>
                    <div className="bip22">Kodlash</div>
                    <div className="bip23">HTML asoslari</div>
                    <div className="bip24">Yaxshi tashkil etilgan va sizga juda ko'p ma'lumotlarga ega darsliklarni tushunishingiz oson</div>
                    <div className="bip25">
                        <div className="bip26"><img src={man3} alt="" /></div>
                        <div className="bip27">Ellisa Rut</div>
                    </div>
                </div>
                <div className="bip28">
                    <div className="bip29"><img src={android} alt="" /></div>
                    <div className="bip30">Kodlash</div>
                    <div className="bip31">Android ilovalarini ishlab chiqish</div>
                    <div className="bip32">Android kodlash ko'nikmalaringizni keyingi bosqichga olib boring, ilg'or Android ilovasi ...</div>
                    <div className="bip33">
                        <div className="bip34"><img src={man4} alt="" /></div>
                        <div className="bip35">Vendi Troye</div>
                    </div>
                </div>
            </div>
                <div className="bip36"><a href="#"><button>Barcha sinflarni ko'rsatish</button></a></div>
        </div>

        <div className="loy">
        <Zoom cascade>
            <div className="loy1">Jonli onlayn vebinar</div>
            <div className="loy2">Vebinarni ilovalarimiz orqali jonli efirga uzatishingiz mumkin. Vebinarimizni yangilab turing, bu bepul!</div>
        </Zoom>
            <div className="loy3"><img src={yusuf} alt="" /></div>
            <div className="loy4">
                <div className="loy5"><a href="#">Ko'proq vebinar videolarini ko'ring</a></div>
                <div className="loy6"><img src={str} alt="" /></div>
            </div>
        </div>

        <div className="oop">
            <Zoom cascade>
            <div className="oop1">Kurs narxi</div>
            <div className="oop2">Ehtiyojlaringizga mos keladigan narxni tanlang.</div>
            </Zoom>
            <div className="oop3">
                <div className="oop4">
                    <div className="oop5">
                        <div className="oop6"><img src={star} alt="" /></div>
                        <div className="oop7">
                            <div className="oop8">Free</div>
                            <div className="oop9"><sup>$</sup>0 <sub>/month</sub></div>
                        </div>
                    </div>
                    <div className="oop11"></div>
                    <div className="oop10"><img src={sq} alt="" /> Har bir sinf uchun bepul elektron kitob</div>
                    <div className="oop10"><img src={sq} alt="" /> Materiallar har kuni yangilanadi</div>
                    <div className="oop10"><img src={sq} alt="" /> Video materiallar bepul yuklab olish</div>
                    <div className="oop10"><img src={sq} alt="" /> 5 ta moddiy videoni oching</div>
                    <div className="oop12"><a href="#"><button>Sizning joriy paketingiz</button></a></div>
                </div>
                <div className="oop13">
                    <div className="oop14">
                        <div className="oop15"><img src={key} alt="" /></div>
                        <div className="oop16">
                            <div className="oop17">Ekspress</div>
                            <div className="oop18"><sup>$</sup>75 <sub>/month</sub></div>
                        </div>
                    </div>
                    <div className="oop19"></div>
                    <div className="oop10"><img src={sq} alt="" /> Har bir sinf uchun bepul elektron kitob</div>
                    <div className="oop10"><img src={sq} alt="" /> Materiallar har kuni yangilanadi</div>
                    <div className="oop10"><img src={sq} alt="" /> Video materiallar bepul yuklab olish</div>
                    <div className="oop10"><img src={sq} alt="" /> Haftada 2 marta yig'ilish</div>
                    <div className="oop10"><img src={sq} alt="" /> 15 ta moddiy videoni oching</div>
                    <div className="oop20"><a href="#"><button>Ekspres sotib oling</button></a></div>
                </div>
                <div className="oop21">
                    <div className="oop22">
                        <div className="oop23"><img src={king} alt="" /></div>
                        <div className="oop24">
                            <div className="oop25">Premium</div>
                            <div className="oop26"><sup>$</sup>115 <sub>/month</sub></div>
                        </div>
                    </div>
                    <div className="oop27"></div>
                    <div className="oop10"><img src={sq} alt="" /> Har bir sinf uchun bepul elektron kitob</div>
                    <div className="oop10"><img src={sq} alt="" /> Materiallar har kuni yangilanadi</div>
                    <div className="oop10"><img src={sq} alt="" /> Video materiallar bepul yuklab olish</div>
                    <div className="oop10"><img src={sq} alt="" /> Mentor bilan shaxsiy suhbat</div>
                    <div className="oop10"><img src={sq} alt="" /> Haftada 3 marta yig'ilish</div>
                    <div className="oop10"><img src={sq} alt="" /> 30 tagacha moddiy videolarni oching</div>
                    <div className="oop10"><img src={sq} alt="" /> Cheksiz saqlangan sinf</div>
                    <div className="oop28"><a href="#"><button>Premiumni sotib oling</button></a></div>
                </div>
            </div>
        </div>

       <Bounce>
       <div className="uh">
            <div className="uh1">
                <div className="uh2">Ilovalarimizni hoziroq oling!</div>
                <div className="uh3">Sinauw mobil ilovasi bilan har joyda va har doim <br /> Bizning ilovalarimizga murojaat qiling.</div>
                <div className="uh4">
                    <div className="uh5"><img src={play} alt="" /></div>
                    <div className="uh6"><img src={apple} alt="" /></div>
                </div>
            </div>
            <div className="uh7"><img src={phone} alt="" /></div>
        </div>
       </Bounce>

        <div className="tugatdim"></div>

       <div className="box">
           <div className="box1">
               <div className="box2"><img src={Sinauw} alt="" /></div>
               <div className="box3">Har qanday fikr yoki savol? <br /> Ijtimoiy tarmoqlarimizda biz bilan bog'laning</div>
               <div className="box4">
                   <div className="box5"><a href="#"><img src={facebook} alt="" /></a></div>
                   <div className="box6"><a href="#"><img src={twitter} alt="" /></a></div>
                   <div className="box7"><a href="#"><img src={instagram} alt="" /></a></div>
               </div>
           </div>
           <div className="box8">
               <div className="box9">Menyu</div>
               <div className="box10"><a href="#">Uy</a></div>
               <div className="box11"><a href="#">Kurslar</a></div>
               <div className="box12"><a href="#">Webinar</a></div>
           </div>
           <div className="box13">
               <div className="box14">Xizmatlar</div>
               <div className="box15"><a href="#">Materiallarni yangilash</a></div>
               <div className="box16"><a href="#">Ishonchli murabbiy</a></div>
               <div className="box17"><a href="#">Bepul elektron kitob</a></div>
               <div className="box18"><a href="#">Uchrashuv</a></div>
           </div>
           <div className="box19">
               <div className="box20">Qo'shimcha ma'lumot</div>
               <div className="box21"><a href="#">Foydalanish shartlari</a></div>
               <div className="box22"><a href="#">Maxfiylik siyosati</a></div>
           </div>
           <div className="box23">
               <div className="box24">Ilovalar yuklab olish</div>
               <div className="box25"><a href="#">Google Play Store</a></div>
               <div className="box26"><a href="#">App Store</a></div>
           </div>
       </div>
        </>
    )
}
export default Header