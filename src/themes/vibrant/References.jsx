import img1 from "../../assets/images/ref1.png";
import img2 from "../../assets/images/ref2.png";
import img3 from "../../assets/images/ref3.png";
import img4 from "../../assets/images/ref4.png";

const refs = [img1, img2, img3, img4, img1, img2, img3, img4];

export default function References() {
    return (
        <section id="references" className="py-16 text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-widest opacity-80">References</h2>
            <div className="container mx-auto flex justify-center gap-12 flex-wrap">
                {refs.map((img, i) => (
                    <img key={i} src={img} className="h-12 w-auto hover:scale-110 transition-transform cursor-pointer" />
                ))}
            </div>
        </section>
    );
}
