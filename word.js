var myDef = setInterval(function(){ myDict() }, 1000);

function myDict(){
  var today = new Date();
  var minuteNow = today.getMinutes();
  var greeting;
	var splashes = ["<h1>petrichor</h1><p class='wordtype'>\\<em>ˈpɛtrʌɪkɔː</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.</li></ul>",
   "<h1>happiness</h1><p class='wordtype'>\\<em>ˈhapɪnəs</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>The state of being happy.</li></ul>",
  "<h1>mellifluous</h1><p class='wordtype'>\\<em>mɛˈlɪflʊəs</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>(of a sound) pleasingly smooth and musical to hear.</li></ul>",
  "<h1>ineffable</h1><p class='wordtype'>\\<em>ɪnˈɛfəb(ə)l</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>Too great or extreme to be expressed or described in words.</li></ul>",
   "<h1>nefarious</h1><p class='wordtype'>\\<em>nɪˈfɛːrɪəs</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  (typically of an action or activity) wicked or criminal.</li></ul>",
  "<h1>somnambulism</h1><p class='wordtype'>\\<em>sɒmˈnambjʊlɪz(ə)m</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A condition that is characterized by walking while asleep.</li></ul>",
  "<h1>epoch</h1><p class='wordtype'>\\<em>ˈiːpɒk</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>1. A particular period of time in history or a person's life.<ul><li>1.1 The beginning of a period in the history of someone or something.</li><li>1.2 <em>Geology</em> A division of time that is a subdivision of a period and is itself subdivided into ages, corresponding to a series in chronostratigraphy.</li><li>1.3 <em>Astronomy</em> An arbitrarily fixed date relative to which planetary or stellar measurements are expressed.</li></ul></li></ul>",
  "<h1>caffè</h1><p class='wordtype'>\\<em>ˈkafeɪ</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>1. A coffeehouse, a cafe, or an informal restaurant; especially one in Italy, or of Italian ownership.</li><li>2. (A drink of) coffee, especially as served in Italian or Italianstyle cafes and restaurants.</li></ul>",
  "<h1>serendipity</h1><p class='wordtype'>\\<em>ˌsɛr(ə)nˈdɪpɪti</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>The occurrence and development of events by chance in a happy or beneficial way.</li></ul>",
  "<h1>limerence</h1><p class='wordtype'>\\<em>ˈlimərəns</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>The state of being infatuated or obsessed with another person.</li></ul>",
  "<h1>ephemeral</h1><p class='wordtype'>\\<em>əˈfem(ə)rəl</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Lasting for a very short time.</li></ul>",
  "<h1>iridescent</h1><p class='wordtype'>\\<em>ˌirəˈdes(ə)nt</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Showing luminous colours that seem to change when seen from different angles.</li></ul>",
  "<h1>solitude</h1><p class='wordtype'>\\<em>ˈsɑləˌt(j)ud</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>The state or situation of being alone. <ul><li>1.1 A lonely or uninhabited place</li></ul></li></ul>",
  "<h1>misnomer</h1><p class='wordtype'>\\<em>mɪsˈnəʊmə</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A wrong or inaccurate name or designation.</li></ul>",
  "<h1>eloquence</h1><p class='wordtype'>\\<em>ˈɛləkwəns</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>Fluent or persuasive speaking or writing.</li></ul>",
  "<h1>sombre</h1><p class='wordtype'>\\<em>ˈsɒmbə</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>1. Dark or dull in colour or tone.</li><li>2. Having or conveying a feeling of deep seriousness and sadness.</li></ul>",
  "<h1>cromulent</h1><p class='wordtype'>\\<em>ˈkrɒmjʊlənt</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Acceptable or adequate.</li></ul>",
  "<h1>penumbra</h1><p class='wordtype'>\\<em>pɪˈnʌmbrə</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>The partially shaded outer region of the shadow cast by an opaque object.</li></ul>",
  "<h1>quintessence</h1><p class='wordtype'>\\<em>kwɪnˈtɛs(ə)ns</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>1. The most perfect or typical example of a quality or class.</li><li>2. Refined essence or extract of a substance.</li><li>3. (in classical and medieval philosophy) a fifth substance in addition to the four elements, thought to compose the heavenly bodies and to be latent in all things.</li></ul>",
  "<h1>harbinger</h1><p class='wordtype'>\\<em>ˈhɑːbɪn(d)ʒə</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A person or thing that announces or signals the approach of another.</li></ul>",
  "<h1>halcyon</h1><p class='wordtype'>\\<em>ˈhalsɪən</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>Denoting a period of time in the past that was idyllically happy and peaceful.</li></ul>",
  "<h1>felicity</h1><p class='wordtype'>\\<em>fɪˈlɪsɪti</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>1. Intense happiness.</li><li>2. The ability to find appropriate expression for one's thoughts.</li></ul>",
  "<h1>gossamer</h1><p class='wordtype'>\\<em>ˈɡɒsəmə</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A fine, filmy substance consisting of cobwebs spun by small spiders, seen especially in autumn.<ul><li> 1.1 A light, thin, and insubstantial or delicate material or substance.</li></ul></li></ul>",
  "<h1>demure</h1><p class='wordtype'>\\<em>dɪˈmjʊə</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>(of a woman or her behaviour) reserved, modest, and shy. <li><ul>1.1 (of clothing) lending a modest appearance.</li></ul></li></ul>",
  "<h1>dulcet</h1><p class='wordtype'>\\<em>ˈdʌlsɪt</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  (especially of sound) sweet and soothing (often used ironically)</li></ul>",
  "<h1>zephyr</h1><p class='wordtype'>\\<em>ˈzɛfə</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>literary A soft gentle breeze. </li><li>2. historical mass noun A fine cotton gingham. <ul><li>2.1 A very light article of clothing.</li></ul></li></ul>",
  "<h1>azure</h1><p class='wordtype'>\\<em>ˈazjʊə</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Bright blue in colour like a cloudless sky.</li></ul>",
  "<h1>anfractuous</h1><p class='wordtype'>\\<em>ənˈfraktjʊəs</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Sinuous or circuitous.</li></ul>",
  "<h1>benthos</h1><p class='wordtype'>\\<em>ˈbɛnθɒs</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>The flora and fauna found on the bottom, or in the bottom sediments, of a sea or lake.</li></ul>",
  "<h1>parish</h1><p class='wordtype'>\\<em>ˈparaf</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A flourish after a signature, originally as a precaution against forgery.</li></ul>",
  "<h1>cryptozoology</h1><p class='wordtype'>\\<em>ˌkrɪptəʊzuːˈɒlədʒi</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>The search for and study of animals whose existence or survival is disputed or unsubstantiated, such as the Loch Ness monster and the yeti.</li></ul>",
  "<h1>euphoria</h1><p class='wordtype'>\\<em>juːˈfɔːrɪə</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A feeling or state of intense excitement and happiness.</li></ul>",
  "<h1>incunabulum</h1><p class='wordtype'>\\<em>ˌɪnkjʊˈnabjʊləm</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>An early printed book, especially one printed before 1501.</li></ul>",
  "<h1>pyroclastic</h1><p class='wordtype'>\\<em>ˌpʌɪrə(ʊ)ˈklastɪk</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Relating to, consisting of, or denoting fragments of rock erupted by a volcano.</li></ul>",
  "<h1>uroboros</h1><p class='wordtype'>\\<em>ˌjʊərə(ʊ)ˈbɒrəs</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A circular symbol depicting a snake, or less commonly a dragon, swallowing its tail, as an emblem of wholeness or infinity.</li></ul>", "<h1>zenith</h1><p class='wordtype'>\\<em>ˈzɛnɪθ</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>1. The time at which something is most powerful or successful. </li><li>2. <em>Astronomy</em> The point in the sky or celestial sphere directly above an observer. The opposite of nadir. <ul><li>2.1 The highest point reached by a given celestial object.</li></ul></li></ul>", "<h1>abscond</h1><p class='wordtype'>\\<em>abˈskɒnd</em>\\&nbsp;&nbsp;<strong>verb</strong></p><ul class='definition'><li>Leave hurriedly and secretly, typically to escape from custody or avoid arrest.</li></ul>",
  "<h1>vitriol</h1><p class='wordtype'>\\<em>ˈvɪtrɪəl</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>Bitter criticism or malice.</li></ul>",
  "<h1>nebulous</h1><p class='wordtype'>\\<em>ˈnɛbjʊləs</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>1. In the form of a cloud or haze; hazy. </li><li>2. (of a concept) vague or illdefined.</li></ul>",
  "<h1>quaint</h1><p class='wordtype'>\\<em>kweɪnt</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Attractively unusual or oldfashioned.</li></ul>",
  "<h1>saccharine</h1><p class='wordtype'>\\<em>ˈsakəriːn</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Excessively sweet or sentimental.</li></ul>",
   "<h1>literati</h1><p class='wordtype'>\\<em>ˌlɪtəˈrɑːti</em>\\&nbsp;&nbsp;<strong>plural noun</strong></p><ul class='definition'><li>Welleducated people who are interested in literature.</li></ul>",
    "<h1>nefandous</h1><p class='wordtype'>\\<em>nɪˈfandəs</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Not to be spoken of, unmentionable; abominable, atrocious.</li></ul>",
  "<h1>moraine</h1><p class='wordtype'>\\<em>məˈreɪn</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A mass of rocks and sediment carried down and deposited by a glacier, typically as ridges at its edges or extremity.</li></ul>",
   "<h1>onomonopaiea</h1><p class='wordtype'>\\<em>ˌɒnə(ʊ)matəˈpiːə</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>The formation of a word from a sound associated with what is named (e.g. cuckoo, sizzle).</li></ul>",
    "<h1>boorish</h1><p class='wordtype'>\\<em>ˈbʊərɪʃ</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Rough and badmannered; coarse.</li></ul>",
     "<h1>moor</h1><p class='wordtype'>\\<em>mɔː</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A tract of open uncultivated upland, typically covered with heather.</li></ul>",
  "<h1>nocturne</h1><p class='wordtype'><em></em><strong>noun</strong></p><ul class='definition'><li>1. <em>Music</em> A short composition of a romantic nature, typically for piano.</li><li>2. <em>Art</em> A picture of a night scene.</li></ul>",
   "<h1>facetious</h1><p class='wordtype'>\\<em>fəˈsiːʃəs</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Treating serious issues with deliberately inappropriate humour; flippant.</li></ul>",
    "<h1>octothorp</h1><p class='wordtype'>\\<em>ˈɒktə(ʊ)θɔːp</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>Another term for the symbol # (the hashtag or pound sign).</li></ul>",
     "<h1>diaphanous</h1><p class='wordtype'>\\<em>dʌɪˈaf(ə)nəs</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  (especially of fabric) light, delicate, and translucent.</li></ul>",
  "<h1>infinitesimal</h1><p class='wordtype'>\\<em>ˌɪnfɪnɪˈtɛsɪm(ə)l</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Extremely small.</li></ul>",
  "<h1>bodacious</h1><p class='wordtype'>\\<em>bəʊˈdeɪʃəs</em>\\&nbsp;&nbsp;<strong>adjective</strong></p><ul class='definition'><li>  Excellent, admirable, or attractive. </li><ul><li>1.1 Audacious in a way considered admirable.</li></ul></li></ul>",
   "<h1>bibliophile</h1><p class='wordtype'>\\<em>ˈbɪblɪə(ʊ)fʌɪl</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A person who collects or has a great love of books.</li></ul>",
    "<h1>tardiness</h1><p class='wordtype'>\\<em>ˈtɑːdɪnəs</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>The quality or fact of being late; lateness.</li></ul>",
     "<h1>humblebrag</h1><p class='wordtype'>\\<em>ˈhəmbəlˌbræɡ</em>\\&nbsp;&nbsp;<strong>verb</strong></p><ul class='definition'><li> Make an ostensibly modest or selfdeprecating statement with the actual intention of drawing attention to something of which one is proud.</li></ul>",
  "<h1>paroxysm</h1><p class='wordtype'>\\<em>ˈparəksɪz(ə)m</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A sudden attack or outburst of a particular emotion or activity.</li></ul>",
   "<h1>catalexis</h1><p class='wordtype'>\\<em>ˈkadəˌleksəs</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>  The absence of a syllable in the last foot of a line or verse.</li></ul>",
    "<h1>midinette</h1><p class='wordtype'>\\<em>ˌmēdēˈnet</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>A seamstress or assistant in a Parisian fashion house.</li></ul>",
     "<h1>epistrophe</h1><p class='wordtype'>\\<em>əˈpɪstrəfi</em>\\&nbsp;&nbsp;<strong>noun</strong></p><ul class='definition'><li>The repetition of a word at the end of successive clauses or sentences.</li></ul>"];
	//$("#word").html($("#word").html().replace("placeholder", splashes[minuteNow]));
  document.getElementById("word").innerHTML = splashes[minuteNow];
}
//
//

var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
  var d = new Date();
  var s = d.getSeconds();
  var deadline = 59;
  var t = deadline - s;
    document.getElementById("demo").innerHTML = 'New word in ' + t + ' seconds';
}
