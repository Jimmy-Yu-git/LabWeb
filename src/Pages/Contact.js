const Contact = () => {
    return (
        <section id="contact">
            <div class="contact container">
                <div>
                    <h1 class="section-title">Contact <span>info</span></h1>
                </div>
                <div class="contact-items">
                    <div class="contact-item">
                        <div class="icon"><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjzH4fbsGRy6ACZdJ14z1NjMSPWxkv0z2qQ&usqp=CAU" />
                        </div>
                        <div class="contact-info">
                            <h1>Phone</h1>
                            <h2>(02)33664499</h2>
                            {/* <h2>(+886)0911903539</h2> */}
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="icon"><img
                            src="https://inside-assets1.inside.com.tw/2014/08/gmail-app-icon.png?w=730&fit=max&q=80" /></div>
                        <div class="contact-info">
                            <h1>Email</h1>
                            <h2>nemolaboratory539</h2>
                            <h2>@gmail.com</h2>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="icon"><img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/National_Taiwan_University_seal.svg/1200px-National_Taiwan_University_seal.svg.png" />
                        </div>
                        <div class="contact-info">
                            <h1>Institution</h1>
                            <h2>National Taiwan University Department of Mechanical Engineering</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact