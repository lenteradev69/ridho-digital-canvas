
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Menu, Mail, Phone, ExternalLink, MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    { name: "Proyek Gedung Perkantoran", location: "Jakarta", year: "2024", image: "https://placehold.co/400x300" },
    { name: "Proyek Residential Complex", location: "Bandung", year: "2024", image: "https://placehold.co/400x300" },
    { name: "Proyek Industrial Plant", location: "Surabaya", year: "2023", image: "https://placehold.co/400x300" },
    { name: "Proyek Mall & Shopping Center", location: "Medan", year: "2023", image: "https://placehold.co/400x300" },
  ];

  const skills = ["AutoCAD", "Civil 3D", "Inventor", "SketchUp", "Revit", "MasterCAM", "Microsoft Office"];

  const experiences = [
    { title: "Senior Drafter", company: "PT. Engineering Solutions", period: "2022 - Sekarang", desc: "Memimpin tim drafting untuk proyek civil dan MEP" },
    { title: "Drafter Civil & MEP", company: "CV. Konstruksi Prima", period: "2020 - 2022", desc: "Mengerjakan drafting detail untuk proyek komersial" },
    { title: "Junior Drafter", company: "PT. Teknik Mandiri", period: "2018 - 2020", desc: "Mulai karir sebagai drafter electrical dan civil" },
  ];

  const achievements = [
    "Juara 1 Lomba CAD Tingkat Nasional 2019",
    "Sertifikasi AutoCAD Professional",
    "Sertifikasi Revit Architecture",
    "Best Graduate Award 2018"
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-800">MRH.</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Beranda", "Tentang", "Proyek", "Keahlian", "Pengalaman", "Kontak"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-slate-700" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4">
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              {["Beranda", "Tentang", "Proyek", "Keahlian", "Pengalaman", "Kontak"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium py-2"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="beranda" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Avatar className="w-32 h-32 mx-auto mb-8 border-4 border-white shadow-xl">
              <AvatarImage src="https://placehold.co/150x150" alt="Muhamad Ridho Hafidz" />
              <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">MRH</AvatarFallback>
            </Avatar>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              Muhamad Ridho Hafidz
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Drafter Profesional | Civil, Electrical & MEP
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('kontak')}
            >
              Hubungi Saya
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Tentang Saya</h2>
          
          <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Saya adalah seorang drafter profesional dengan pengalaman lebih dari 5 tahun dalam bidang civil, electrical, dan MEP (Mechanical, Electrical, Plumbing). Memiliki keahlian mendalam dalam software CAD terkini dan passionate dalam menghasilkan gambar teknik yang presisi.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Berpengalaman menangani berbagai proyek mulai dari residential, commercial, hingga industrial. Selalu berkomitmen untuk memberikan hasil terbaik dengan standar kualitas tinggi dan tepat waktu.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <img 
                    src="https://placehold.co/300x400" 
                    alt="Profile" 
                    className="rounded-2xl shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyek" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Proyek Terbaru</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                <CardContent className="p-6">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="font-bold text-slate-800 mb-2">{project.name}</h3>
                  <div className="flex items-center text-slate-600 text-sm mb-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="keahlian" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Keahlian</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  className="px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="pengalaman" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Pengalaman & Pendidikan</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Experience */}
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                  Riwayat Pekerjaan
                </h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6">
                      <h4 className="font-bold text-slate-800">{exp.title}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-slate-500 text-sm mb-2">{exp.period}</p>
                      <p className="text-slate-700">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-purple-600" />
                  Pendidikan
                </h3>
                <div className="border-l-4 border-purple-500 pl-6 mb-8">
                  <h4 className="font-bold text-slate-800">Teknik Sipil</h4>
                  <p className="text-purple-600 font-medium">Universitas Indonesia</p>
                  <p className="text-slate-500 text-sm">2014 - 2018</p>
                </div>
                
                <h4 className="font-bold text-slate-800 mb-4">Prestasi & Sertifikasi</h4>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-slate-700 flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Hubungi Saya</h2>
          
          <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-white">
            <CardContent className="p-8">
              <div className="space-y-6">
                <a 
                  href="mailto:ridho.hafidz@email.com" 
                  className="flex items-center p-4 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors duration-300 group"
                >
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-slate-800 group-hover:text-blue-600">Email</p>
                    <p className="text-slate-600">ridho.hafidz@email.com</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
                </a>
                
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-slate-50 hover:bg-green-50 transition-colors duration-300 group"
                >
                  <Phone className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <p className="font-medium text-slate-800 group-hover:text-green-600">WhatsApp</p>
                    <p className="text-slate-600">+62 812-3456-7890</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
                </a>
                
                <a 
                  href="https://linkedin.com/in/ridho-hafidz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors duration-300 group"
                >
                  <div className="w-6 h-6 bg-blue-600 rounded mr-4 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 group-hover:text-blue-600">LinkedIn</p>
                    <p className="text-slate-600">linkedin.com/in/ridho-hafidz</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-slate-300">
            © 2024 Muhamad Ridho Hafidz. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
