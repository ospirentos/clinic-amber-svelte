<script>
  import "../app.css";
</script>


<nav class="w-full h-24 flex items-center justify-between">
  <img src="/images/amber-dental-clinic-logo.webp" alt="" class=""/>
  <ul>
    <li class="float-left mx-3 hover:cursor-pointer hover:text-primary transition-colors">Anasayfa</li>
    <li class="float-left mx-3 hover:cursor-pointer hover:text-primary transition-colors">Hakkımızda</li>
    <li class="float-left mx-3 hover:cursor-pointer hover:text-primary transition-colors group">
      <span>Hizmetlerimiz</span>
      <ul class="px-6 py-2 bg-white invisible opacity-0 absolute group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-in overflow-hidden left-1/2 rounded-md drop-shadow-sm">
        <li class="text-black hover:text-primary py-2">İmplant Tedavisi</li>
        <li class="text-black hover:text-primary py-2">Gülüş Tasarımı</li>
        <li class="text-black hover:text-primary py-2">Protez Tedavileri</li>
        <li class="text-black hover:text-primary py-2">Pedodonti</li>
        <li class="text-black hover:text-primary py-2">Ortodonti</li>
        <li class="text-black hover:text-primary py-2">Endodonti</li>
        <li class="text-black hover:text-primary py-2">Diş Beyazlatma</li>
        <li class="text-black hover:text-primary py-2">Çene Cerrahisi</li>
        <li class="text-black hover:text-primary py-2">Periodontoloji</li>
        <li class="text-black hover:text-primary py-2">2D-3D Görüntüleme</li>
      </ul>
    </li>
    <li class="float-left mx-3 hover:cursor-pointer hover:text-primary transition-colors">Blog</li>
    <li class="float-left mx-3 hover:cursor-pointer hover:text-primary transition-colors">İletişim</li>
  </ul>
  <div></div>
</nav>

<slot></slot>