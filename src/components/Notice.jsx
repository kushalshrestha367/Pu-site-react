import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';

const notices = [
  {
    month: 'Apr', day: '13',
    title: 'पूर्वाञ्चल विश्वविद्यालयकी बरिष्ठ अधिकृत रिना हाडाको विदाई !',
    img: '/assets/img/notice/1.jpeg',
    body: 'पूर्वाञ्चल विश्वविद्यालय अन्तर्गत उपकुलपतिको कार्यालयमा कार्यरत बरिष्ठ अधिकृत रिना हाडाज्यूको कार्यकाल समाप्तीको अवसरमा एक भव्यताका साथ विदाई कार्यक्रम सम्पन्न भएको छ । कार्यक्रममा विश्वविद्यालयका...',
  },
  {
    month: 'Apr', day: '01',
    title: 'नवनियुक्त शिक्षा, विज्ञान तथा प्रविधि मन्त्रीज्यूलाई शुभकामना व्यक्त !',
    img: '/assets/img/notice/2.jpeg',
    body: 'पूर्वाञ्चल विश्वविद्यालयका उपकुलपति प्रा.डा. विजु कुमार थपलियाज्यू र रजिष्ट्रार प्रा.डा. कल्याणी मित्र त्रिपाठीज्यूले नवनियुक्त शिक्षा, विज्ञान तथा प्रविधि; युवा तथा खेलकुद मन्त्री तथा विश्वविद्यालयका सहकुलपति माननीय सस्मित...',
  },
  {
    month: 'Feb', day: '14',
    title: 'पूर्वाञ्चल विश्वविद्यालयद्धारा आयोजित अन्तर्राष्ट्रिय सम्मलेन सम्पन्न !',
    img: '/assets/img/notice/3.jpeg',
    body: 'पूर्वाञ्चल विश्वविद्यालयद्वारा केन्द्रीय कार्यालय सुन्दरहरैंचास्थित गोठगाउँमा आयोजना गरिएको दुईदिने (ई.सं.१२ र १३ फेब्रुवरी २०२६) अन्तर्राष्ट्रिय सम्मेलनमा उपस्थित विज्ञहरुले सुन्दर हिमश्रृंखलाहरुको देश नेपालमा पर्वतारोहणका...',
  },
  {
    month: 'Jan', day: '25',
    title: 'पूवि सेवा आयोगमा नयाँ अध्यक्ष र सदस्यको पदस्थापन !',
    img: '/assets/img/notice/5.jpeg',
    body: 'पूर्वाञ्चल विश्वविद्यालयको सेवा आयोगमा लामो समयदेखि रिक्त रहेको अध्यक्षमा प्रा.डा. देवेन्द्र अधिकारी र सदस्यमा प्रा. समी लामा नियुक्त भई आइतबार देखि कार्यभार सम्हाल्नु भएको छ । यसले गत एक वर्षदेखि थन्किएका...',
  },
  {
    month: 'Jan', day: '03',
    title: 'पूर्वाञ्चल विश्वविद्यालयको ३२औँ वार्षिक उत्सव भव्यताका साथ सम्पन्न !',
    img: '/assets/img/notice/6.jpeg',
    body: 'मिति २०८२।०९।१९ गते पूर्वाञ्चल विश्वविद्यालयले आफ्नो स्थापनाको ३२ वर्ष पूरा गरेको अवसरमा शनिबार केन्द्रीय कार्यालय गोठगाउँमा भव्य समारोहका साथ ३२ औं वार्षिकोत्सव मनाएको छ । साताव्यापी रूपमा सञ्चालित...',
  },
];

export default function Notice() {
  const [active, setActive] = useState(0);
  const n = notices[active];

  return (
    <section id="home-notice" className="section bg-gray-100 py-12">
      <div className="container-x max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
        
        {/* Left dark panel */}
        <Reveal className="lg:col-span-1 bg-[#1a1f3c] text-white p-8 md:p-10 flex flex-col justify-between min-h-[500px]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Recent Notice
            </h2>
            
            <div className="space-y-6">
              {notices.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-full text-left flex items-start gap-4 group transition"
                >
                  {/* Date Column */}
                  <div className="flex flex-col items-center min-w-[3rem] pt-1">
                    <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">
                      {item.month}
                    </span>
                    <span className="text-xl font-bold text-white leading-none mt-1">
                      {item.day}
                    </span>
                  </div>
                  
                  {/* Title Link */}
                  <div 
                    className={`text-sm font-medium underline underline-offset-4 decoration-1 transition-colors ${
                      active === i 
                        ? 'text-white decoration-white' 
                        : 'text-gray-400 decoration-gray-400 group-hover:text-white group-hover:decoration-white'
                    }`}
                  >
                    {item.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* More Notices Button */}
          <div className="mt-10">
            <Link
              to="#"
              className="inline-flex items-center gap-2 border border-white text-white px-6 py-2.5 text-sm font-semibold hover:bg-white hover:text-[#1a1f3c] transition-colors duration-300"
            >
              More Notices <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        {/* Right content */}
        <Reveal delay={1} className="lg:col-span-2 flex flex-col">
          <div className="w-full h-[300px] md:h-[400px] overflow-hidden mb-6">
            <img 
              src={n.img} 
              alt="" 
              className="w-full h-full object-cover object-center" 
            />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1f3c] mb-4 leading-snug">
            {n.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-6 text-base">
            {n.body}
          </p>
          
          <Link
            to="#" 
            className="inline-flex items-center gap-1 text-red-600 font-bold hover:text-red-700 transition-colors mt-auto"
          >
            Read More <ArrowRight size={16} />
          </Link>
        </Reveal>

      </div>
    </section>
  );
}