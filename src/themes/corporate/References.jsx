import img1 from "../../assets/images/ref1.png";
import img2 from "../../assets/images/ref2.png";
import img3 from "../../assets/images/ref3.png";
import img4 from "../../assets/images/ref4.png";

const refs = [img1, img2, img3, img4, img1, img2, img3, img4];

export default function References() {
    return (
        <section className="py-16 bg-gray-50 overflow-hidden border-y border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 uppercase tracking-widest">References</h2>
            <div className="flex gap-16 animate-infinite-scroll">
                {[...refs, ...refs].map((img, i) => (
                    <img key={i} src={img} className="h-12 w-auto hover:scale-105 transition-transform" />
                ))}
            </div>
        </section>
    );
}
