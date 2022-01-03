import Contact from './Contact'
import Appbar from './Appbar'
import Footer from './Footer'
const Public = () => {
    return (
        <div>
            <Appbar></Appbar>
            <section id="journal">
                <div class="container">
                    <div class="col-left">
                    </div>
                </div>
                <div class="col-down">
                    <h1>Publication</h1>
                    {/* <h1 class="section-title">2021 <span></span></h1> */}
                    <p> - Li Xu, "Continuous Wave Laser Nanowelding Process of Ag Nanowires on Flexible Polymer Substrates" , Journal of Nanomaterials 2021, 11(10), 29 August 2021. SCI</p>
                    <a href='https://doi.org/10.3390/nano11102511'>https://doi.org/10.3390/nano11102511</a>
                    {/* <h1 class="section-title">2017 <span></span></h1> */}
                    <p> - Li Xu, “Efficiency loss of thin film Cu(InxGa1−x)Se(S) solar panels by lamination process” , Journal of Applied Physics, vol. 121, p154901, April 2017. SCI</p>
                    <a href='https://doi.org/10.1063/1.4979635'>https://doi.org/10.1063/1.4979635</a>
                    {/* <h1 class="section-title">2008 <span></span></h1> */}
                    <p> - N. Misra, L. Xu, M.S. Rogers, S.H. Ko, C.P. Grigoropoulos, Pulsed Laser Annealing of Semiconductor Structures for Functional Devices, Physica Status Solidi, vol. 5, p3264, July 2008. SCI </p>
                    <a>https://onlinelibrary.wiley.com/doi/abs/10.1002/pssc.200779506</a>
                    {/* <h1 class="section-title">2007 <span></span></h1> */}
                    <p> - Misra, Nipun; Xu, Li; Pan, Yaoling; Cheung, Nathan; Grigoropoulos, Costas P., “Excimer laser annealing of silicon nanowires”, Applied Physics Letters, vol. 90, p111111, 2007. SCI</p>
                    <a>https://doi.org/10.1063/1.2713774</a>
                    {/* <h1 class="section-title">2006 <span></span></h1> */}
                    <p> - L. Xu, C. Grigoropoulos, T.-J. King, “High Performance Thin Silicon Film Transistors Fabricated By Double Laser Crystallization”, Journal of Applied Physics, vol. 99, p034508, 2006. SCI</p>
                    <a>https://doi.org/10.1063/1.2171807</a>
                    
                </div>
            </section>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}
export default Public