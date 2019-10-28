var marker1 = L.marker([51.546079, -0.201783]).addTo(mymap);

/* var p = L.polyline([
			[51.547828, -0.206938],
			[51.545398, -0.206766],
			[51.545505, -0.200672],
			[51.547774, -0.201015]
		],
		{ weight: 4, color: '#5d9ede', opacity: 0.8}).bindTooltip('Kilburn.', { direction: 'auto', sticky: 'true'  }).addTo(mymap);
		
var p2 = L.polygon([
			[51.542916, -0.210371],
			[51.543023, -0.185738],
			[51.532075, -0.18548],
			[51.532129, -0.210328]
			],
			{ weight:4,  opacity: 0.8, fillOpacity: 0.1}).bindTooltip('Kilburn Ward', {sticky: 'true'}).addTo(mymap); */

/*
		
function onMouseOver(e) { 
KilburnWardBound1965.setStyle({fillColor: 'red'});
KilburnWardBound1965.off('mouseover', onMouseOver);
KilburnWardBound1965.on('mouseout', onMouseOut);
 }
function onMouseOut(e) {
KilburnWardBound1965.setStyle({fillColor: 'blue'});
KilburnWardBound1965.off('mouseout', onMouseOut);
KilburnWardBound1965.on('mouseover', onMouseOver);
}

KilburnWardBound1965.on('mouseover', onMouseOver);
*/
			
var Kilburn1947 = L.polygon([
[51.550181, -0.207147],[51.550258, -0.207029],[51.550368, -0.206782],[51.550472, -0.206535],[51.550588, -0.206262],[51.550735, -0.205908],[51.550845, -0.205575],[51.550935, -0.205291],[51.550992, -0.204991],[51.551029, -0.204653],[51.551039, -0.204497],[51.551046, -0.204304],[51.551059, -0.204143],[51.551069, -0.203987],[51.551079, -0.203757],[51.551092, -0.203574],[51.551089, -0.203354],[51.551086, -0.203226],[51.551086, -0.202973],[51.551072, -0.202678],[51.550895, -0.202373],[51.550765, -0.202083],[51.550592, -0.201766],[51.550388, -0.20123],[51.550165, -0.200651],[51.549914, -0.1999],[51.549687, -0.199208],[51.549447, -0.198312],[51.54924, -0.197582],[51.548979, -0.196086],[51.548863, -0.195318],[51.548796, -0.194868],[51.548696, -0.194031],[51.548649, -0.193495],[51.548653, -0.193248],[51.548646, -0.192915],[51.548643, -0.192615],[51.548626, -0.192336],[51.548613, -0.192035],[51.548579, -0.191612],[51.548563, -0.191408],[51.548536, -0.191075],[51.548503, -0.191011],[51.548396, -0.190995],[51.548232, -0.190989],[51.547949, -0.191005],[51.547632, -0.191038],[51.547475, -0.191064],[51.547261, -0.191075],[51.547171, -0.191086],[51.547004, -0.191102],[51.546777, -0.191113],[51.546397, -0.191145],[51.54627, -0.191156],[51.546083, -0.191215],[51.545863, -0.19129],[51.545679, -0.191376],[51.545419, -0.191515],[51.545165, -0.191633],[51.544958, -0.191751],[51.544822, -0.191885],[51.544688, -0.192175],[51.544575, -0.192422],[51.544505, -0.192508],[51.544414, -0.192567],[51.544238, -0.192642],[51.544041, -0.192701],[51.543944, -0.192701],[51.5437, -0.192652],[51.543607, -0.192668],[51.54348, -0.192701],[51.543273, -0.19284],[51.543089, -0.192931],[51.542933, -0.192985],[51.542682, -0.193124],[51.542549, -0.193178],[51.542415, -0.193194],[51.542322, -0.193189],[51.542212, -0.193092],[51.542082, -0.192899],[51.541942, -0.192695],[51.541885, -0.192615],[51.541691, -0.192502],[51.541571, -0.192438],[51.541414, -0.192373],[51.541288, -0.192309],[51.541181, -0.192245],[51.541114, -0.1921],[51.541057, -0.191923],[51.541034, -0.191837],[51.54092, -0.191842],[51.540844, -0.191794],[51.540787, -0.191665],[51.54075, -0.191563],[51.540667, -0.191547],[51.540573, -0.191569],[51.54049, -0.191574],[51.540406, -0.191563],[51.54026, -0.191515],[51.540083, -0.191419],[51.539902, -0.19136],[51.539806, -0.191349],[51.539712, -0.191376],[51.539609, -0.191478],[51.539402, -0.191864],[51.539228, -0.192298],[51.539101, -0.192615],[51.538975, -0.192856],[51.538848, -0.193039],[51.538748, -0.19313],[51.538143, -0.193634],[51.539352, -0.195007],[51.5408, -0.196654],[51.542539, -0.198773],[51.543814, -0.200307],[51.544665, -0.201268],[51.545803, -0.202475],[51.547726, -0.204508],[51.549147, -0.206031],[51.550135, -0.207083]	
],	{ weight:4,  opacity: 0.2, fillOpacity: 0.5, fillColor: '#a9def9'}).bindPopup('Kilburn Ward', {sticky: 'true', position: 'left', autoClose: false, closeOnClick: false});

var WE1947 = L.polygon([
[51.550181, -0.207147],[51.550241, -0.207227],[51.550615, -0.207742],[51.550989, -0.208247],[51.551359, -0.208789],[51.55169, -0.209261],[51.55204, -0.209749],[51.55233, -0.21013],[51.552667, -0.210602],[51.553091, -0.21117],[51.553381, -0.211503],[51.553658, -0.211836],[51.553892, -0.212114],[51.554259, -0.212528],[51.554823, -0.21315],[51.555046, -0.213386],[51.5552, -0.213498],[51.555423, -0.213059],[51.555604, -0.212769],[51.55581, -0.212409],[51.556004, -0.212055],[51.556164, -0.211701],[51.556365, -0.211068],[51.556515, -0.210639],[51.556745, -0.210001],[51.556245, -0.209518],[51.555841, -0.209137],[51.555751, -0.209051],[51.555854, -0.208392],[51.556111, -0.20734],[51.556235, -0.206836],[51.556358, -0.206198],[51.556362, -0.205972],[51.555724, -0.205843],[51.555545, -0.205795],[51.555388, -0.205725],[51.555274, -0.205699],[51.555488, -0.204594],[51.555608, -0.203832],[51.555665, -0.203193],[51.555798, -0.20234],[51.556018, -0.201048],[51.556095, -0.200479],[51.556152, -0.20005],[51.556222, -0.199363],[51.556228, -0.199315],[51.556498, -0.199433],[51.556792, -0.199524],[51.556965, -0.199519],[51.557092, -0.199471],[51.557282, -0.199336],[51.557459, -0.19917],[51.557713, -0.198966],[51.557943, -0.198741],[51.55807, -0.198623],[51.558117, -0.198569],[51.558464, -0.198607],[51.55863, -0.198575],[51.558857, -0.198441],[51.559101, -0.198092],[51.559488, -0.197502],[51.559718, -0.197282],[51.559668, -0.197073],[51.559394, -0.196944],[51.55927, -0.196858],[51.559073, -0.19674],[51.558946, -0.196579],[51.55877, -0.196413],[51.558469, -0.196145],[51.558246, -0.195994],[51.557899, -0.195817],[51.557699, -0.19571],[51.557425, -0.195592],[51.557091, -0.195399],[51.556788, -0.195152],[51.556577, -0.194938],[51.556284, -0.194562],[51.556001, -0.194176],[51.555798, -0.193865],[51.555591, -0.193511],[51.555388, -0.193151],[51.555097, -0.19262],[51.554703, -0.191907],[51.554266, -0.191107],[51.553699, -0.190099],[51.553289, -0.189364],[51.552925, -0.188704],[51.552875, -0.18887],[51.552752, -0.189391],[51.552588, -0.190024],[51.552361, -0.190828],[51.552174, -0.191697],[51.552054, -0.192105],[51.551951, -0.192406],[51.551881, -0.192604],[51.551811, -0.19254],[51.551654, -0.192234],[51.551539, -0.192003],[51.551432, -0.19181],[51.551332, -0.191724],[51.551182, -0.191612],[51.551045, -0.191504],[51.550928, -0.191461],[51.550754, -0.191419],[51.550541, -0.191365],[51.550391, -0.19136],[51.550191, -0.191381],[51.549934, -0.191435],[51.549693, -0.191483],[51.549543, -0.191483],[51.549323, -0.191386],[51.549079, -0.191215],[51.548862, -0.191113],[51.548676, -0.191054],[51.548542, -0.191027],[51.548503, -0.191011],[51.548536, -0.191075],[51.548563, -0.191408],[51.548579, -0.191612],[51.548613, -0.192035],[51.548626, -0.192336],[51.548643, -0.192615],[51.548646, -0.192915],[51.548653, -0.193248],[51.548649, -0.193495],[51.548696, -0.194031],[51.548796, -0.194868],[51.548863, -0.195318],[51.548979, -0.196086],[51.54924, -0.197582],[51.549447, -0.198312],[51.549687, -0.199208],[51.549914, -0.1999],[51.550165, -0.200651],[51.550388, -0.20123],[51.550592, -0.201766],[51.550765, -0.202083],[51.550895, -0.202373],[51.551072, -0.202678],[51.551086, -0.202973],[51.551086, -0.203226],[51.551089, -0.203354],[51.551092, -0.203574],[51.551079, -0.203757],[51.551069, -0.203987],[51.551059, -0.204143],[51.551046, -0.204304],[51.551039, -0.204497],[51.551029, -0.204653],[51.550992, -0.204991],[51.550935, -0.205291],[51.550845, -0.205575],[51.550735, -0.205908],[51.550588, -0.206262],[51.550472, -0.206535],[51.550368, -0.206782],[51.550258, -0.207029],[51.550181, -0.207147]
],	{ weight:4,  opacity: 0.2, fillOpacity: 0.5, fillColor: '#d3f8e2'}).bindPopup('West End Ward', {sticky: 'true', position: 'left', autoClose: false, closeOnClick: false});

var Central1947 = L.polygon([
[51.552925, -0.188704],[51.552875, -0.18887],[51.552752, -0.189391],[51.552588, -0.190024],[51.552361, -0.190828],[51.552174, -0.191697],[51.552054, -0.192105],[51.551951, -0.192406],[51.551881, -0.192604],[51.551811, -0.19254],[51.551654, -0.192234],[51.551539, -0.192003],[51.551432, -0.19181],[51.551332, -0.191724],[51.551182, -0.191612],[51.551045, -0.191504],[51.550928, -0.191461],[51.550754, -0.191419],[51.550541, -0.191365],[51.550391, -0.19136],[51.550191, -0.191381],[51.549934, -0.191435],[51.549693, -0.191483],[51.549543, -0.191483],[51.549323, -0.191386],[51.549079, -0.191215],[51.548862, -0.191113],[51.548676, -0.191054],[51.548542, -0.191027],[51.548503, -0.191011],[51.548396, -0.190995],[51.548232, -0.190989],[51.547949, -0.191005],[51.547632, -0.191038],[51.547475, -0.191064],[51.547261, -0.191075],[51.547171, -0.191086],[51.547004, -0.191102],[51.546777, -0.191113],[51.546397, -0.191145],[51.54627, -0.191156],[51.546083, -0.191215],[51.545863, -0.19129],[51.545679, -0.191376],[51.545419, -0.191515],[51.545165, -0.191633],[51.544958, -0.191751],[51.544822, -0.191885],[51.544688, -0.192175],[51.544575, -0.192422],[51.544505, -0.192508],[51.544414, -0.192567],[51.544238, -0.192642],[51.544041, -0.192701],[51.543944, -0.192701],[51.5437, -0.192652],[51.543607, -0.192668],[51.54348, -0.192701],[51.543273, -0.19284],[51.543089, -0.192931],[51.543071, -0.192856],[51.543081, -0.192593],[51.543091, -0.192352],[51.543091, -0.192068],[51.543107, -0.19159],[51.543121, -0.19107],[51.543134, -0.190501],[51.543147, -0.189868],[51.543137, -0.189573],[51.543134, -0.189348],[51.543144, -0.189085],[51.543137, -0.188946],[51.543131, -0.188828],[51.543107, -0.188538],[51.543061, -0.188254],[51.543041, -0.187969],[51.543017, -0.187647],[51.543027, -0.187256],[51.543037, -0.186816],[51.543044, -0.186494],[51.543044, -0.186022],[51.543042, -0.185689],[51.543068, -0.185405],[51.543118, -0.185105],[51.543195, -0.184793],[51.543285, -0.184456],[51.543395, -0.184107],[51.543619, -0.183522],[51.543833, -0.183066],[51.544112, -0.182503],[51.54474, -0.181457],[51.544847, -0.181274],[51.54506, -0.180936],[51.545274, -0.180582],[51.545454, -0.180293],[51.545664, -0.179965],[51.545848, -0.179676],[51.546031, -0.17922],[51.546205, -0.178903],[51.545918, -0.178587],[51.545704, -0.178292],[51.545474, -0.17775],[51.545307, -0.177283],[51.545117, -0.176779],[51.544917, -0.176296],[51.544686, -0.17591],[51.544563, -0.175781],[51.544389, -0.175583],[51.544106, -0.175368],[51.543859, -0.175202],[51.543585, -0.174918],[51.543712, -0.174891],[51.544076, -0.174875],[51.544313, -0.174853],[51.544453, -0.174864],[51.544573, -0.174891],[51.544657, -0.174944],[51.54473, -0.174816],[51.544894, -0.174424],[51.545134, -0.173861],[51.545301, -0.173534],[51.545627, -0.173019],[51.545734, -0.172863],[51.546185, -0.172718],[51.546555, -0.172616],[51.546788, -0.172632],[51.546955, -0.172643],[51.547098, -0.172622],[51.547329, -0.17252],[51.547612, -0.172375],[51.547653, -0.172321],[51.547753, -0.172187],[51.548044, -0.17179],[51.548371, -0.171323],[51.548674, -0.170884],[51.548718, -0.1709],[51.549025, -0.171216],[51.549118, -0.171372],[51.549188, -0.171484],[51.549229, -0.171549],[51.549118, -0.171651],[51.549185, -0.171779],[51.549375, -0.172273],[51.549505, -0.172584],[51.549616, -0.172847],[51.549699, -0.172933],[51.549816, -0.172965],[51.550099, -0.172927],[51.550183, -0.172895],[51.550453, -0.17348],[51.550683, -0.174016],[51.550947, -0.174569],[51.551077, -0.174832],[51.551324, -0.175159],[51.551498, -0.17539],[51.551621, -0.175508],[51.551665, -0.17569],[51.551718, -0.175883],[51.552125, -0.175899],[51.552622, -0.175915],[51.552996, -0.175921],[51.553036, -0.175921],[51.55321, -0.176017],[51.553366, -0.176189],[51.55359, -0.17643],[51.55367, -0.176548],[51.553593, -0.176704],[51.553453, -0.176972],[51.553323, -0.17723],[51.553123, -0.177611],[51.552923, -0.178024],[51.552746, -0.178362],[51.552622, -0.178624],[51.552482, -0.179021],[51.552295, -0.179552],[51.552192, -0.179853],[51.552045, -0.180266],[51.551908, -0.180641],[51.552082, -0.180663],[51.552312, -0.180717],[51.552526, -0.180759],[51.552703, -0.180818],[51.552856, -0.180926],[51.553003, -0.181071],[51.55314, -0.181258],[51.55327, -0.181446],[51.553373, -0.181634],[51.553487, -0.181811],[51.553617, -0.182009],[51.553717, -0.182149],[51.553907, -0.182299],[51.554114, -0.182465],[51.554331, -0.18261],[51.554488, -0.182728],[51.554454, -0.182905],[51.554374, -0.183211],[51.554241, -0.183694],[51.554107, -0.184236],[51.554054, -0.184541],[51.554037, -0.184729],[51.554014, -0.184965],[51.553994, -0.185169],[51.553974, -0.185325],[51.553951, -0.185453],[51.553891, -0.185582],[51.55381, -0.185738],[51.553734, -0.185872],[51.553667, -0.186054],[51.553627, -0.186258],[51.55358, -0.186489],[51.553467, -0.187009],[51.55333, -0.187545],[51.55321, -0.187937],[51.55312, -0.188259],[51.553076, -0.188382],[51.553013, -0.188575],[51.55296, -0.188683]
],	{ weight:4,  opacity: 0.2, fillOpacity: 0.5, fillColor: '#e4c1f9'}).bindPopup('Central Ward', {sticky: 'true', position: 'left', autoClose: false, closeOnClick: false});

var PrioryWard1947 = L.polygon([
[51.538143, -0.193634],[51.538748, -0.19313],[51.538848, -0.193039],[51.538975, -0.192856],[51.539101, -0.192615],[51.539228, -0.192298],[51.539402, -0.191864],[51.539609, -0.191478],[51.539712, -0.191376],[51.539806, -0.191349],[51.539902, -0.19136],[51.540083, -0.191419],[51.54026, -0.191515],[51.540406, -0.191563],[51.54049, -0.191574],[51.540573, -0.191569],[51.540667, -0.191547],[51.54075, -0.191563],[51.540787, -0.191665],[51.540844, -0.191794],[51.54092, -0.191842],[51.541034, -0.191837],[51.541057, -0.191923],[51.541114, -0.1921],[51.541181, -0.192245],[51.541288, -0.192309],[51.541414, -0.192373],[51.541571, -0.192438],[51.541691, -0.192502],[51.541885, -0.192615],[51.541942, -0.192695],[51.542082, -0.192899],[51.542212, -0.193092],[51.542322, -0.193189],[51.542415, -0.193194],[51.542549, -0.193178],[51.542682, -0.193124],[51.542933, -0.192985],[51.543089, -0.192931],[51.543071, -0.192856],[51.543081, -0.192593],[51.543091, -0.192352],[51.543091, -0.192068],[51.543107, -0.19159],[51.543121, -0.19107],[51.543134, -0.190501],[51.543147, -0.189868],[51.543137, -0.189573],[51.543134, -0.189348],[51.543144, -0.189085],[51.543137, -0.188946],[51.543131, -0.188828],[51.543107, -0.188538],[51.543061, -0.188254],[51.543041, -0.187969],[51.543017, -0.187647],[51.543027, -0.187256],[51.543037, -0.186816],[51.543044, -0.186494],[51.543044, -0.186022],[51.543042, -0.185689],[51.543068, -0.185405],[51.543118, -0.185105],[51.543195, -0.184793],[51.543285, -0.184456],[51.543395, -0.184107],[51.543619, -0.183522],[51.543833, -0.183066],[51.544112, -0.182503],[51.54474, -0.181457],[51.544847, -0.181274],[51.54506, -0.180936],[51.545274, -0.180582],[51.545454, -0.180293],[51.545664, -0.179965],[51.545848, -0.179676],[51.546031, -0.17922],[51.546205, -0.178903],[51.545918, -0.178587],[51.545704, -0.178292],[51.545474, -0.17775],[51.545307, -0.177283],[51.545117, -0.176779],[51.544917, -0.176296],[51.544686, -0.17591],[51.544563, -0.175781],[51.544389, -0.175583],[51.544106, -0.175368],[51.543859, -0.175202],[51.543585, -0.174918],[51.543475, -0.174837],[51.543285, -0.174639],[51.543161, -0.174499],[51.542924, -0.174279],[51.542687, -0.174054],[51.542334, -0.173759],[51.542047, -0.173485],[51.541816, -0.173281],[51.541676, -0.173196],[51.541493, -0.172992],[51.541272, -0.172815],[51.540965, -0.172514],[51.540675, -0.172246],[51.540438, -0.172021],[51.540194, -0.171785],[51.539907, -0.171511],[51.53969, -0.171286],[51.53946, -0.171044],[51.539303, -0.170862],[51.53918, -0.170685],[51.53906, -0.170492],[51.538933, -0.170208],[51.538826, -0.169945],[51.538702, -0.169671],[51.538622, -0.169478],[51.538519, -0.169623],[51.538376, -0.169886],[51.538245, -0.170111],[51.538042, -0.170454],[51.537882, -0.170728],[51.537788, -0.170878],[51.538092, -0.171382],[51.538352, -0.171838],[51.538406, -0.171908],[51.538339, -0.172058],[51.538042, -0.172675],[51.537648, -0.17348],[51.537975, -0.173882],[51.538169, -0.174091],[51.538245, -0.174124],[51.538295, -0.174129],[51.538736, -0.174065],[51.539497, -0.173925],[51.53955, -0.174714],[51.539577, -0.175132],[51.539625, -0.176001],[51.539709, -0.177187],[51.539769, -0.177986],[51.539799, -0.178297],[51.539812, -0.178415],[51.539792, -0.178855],[51.539756, -0.179204],[51.539702, -0.179531],[51.539639, -0.179821],[51.539556, -0.180159],[51.539402, -0.1807],[51.539315, -0.181049],[51.539218, -0.181355],[51.539098, -0.18172],[51.538905, -0.182347],[51.538751, -0.182809],[51.538584, -0.183297],[51.538444, -0.183667],[51.538217, -0.184203],[51.538084, -0.184456],[51.537967, -0.184622],[51.53779, -0.18481],[51.53751, -0.185105],[51.537123, -0.185502],[51.536655, -0.186006],[51.536405, -0.186269],[51.535954, -0.186757],[51.535394, -0.187368],[51.535106, -0.187701],[51.534923, -0.187894],[51.534766, -0.188211],[51.534566, -0.188624],[51.534512, -0.18872],[51.534743, -0.189015],[51.53508, -0.18945],[51.53522, -0.189713],[51.535367, -0.190002],[51.535604, -0.190496],[51.535824, -0.190893],[51.535991, -0.19114],[51.536248, -0.191429],[51.536692, -0.191917],[51.536912, -0.192175],[51.537326, -0.192679],[51.537727, -0.193151],[51.538101, -0.193596]
],	{ weight:4,  opacity: 0.2, fillOpacity: 0.5, fillColor: '#f694c1'}).bindPopup('Priory Ward', {sticky: 'true', position: 'left', autoClose: false, closeOnClick: false});


var Kilburn1965 = L.polygon([
[51.550181, -0.207147],[51.550258, -0.207029],[51.550368, -0.206782],[51.550472, -0.206535],[51.550588, -0.206262],[51.550735, -0.205908],[51.550845, -0.205575],[51.550935, -0.205291],[51.550992, -0.204991],[51.551029, -0.204653],[51.551039, -0.204497],[51.551046, -0.204304],[51.551059, -0.204143],[51.551069, -0.203987],[51.551079, -0.203757],[51.551092, -0.203574],[51.551089, -0.203354],[51.551086, -0.203226],[51.551086, -0.202973],[51.551072, -0.202678],[51.550895, -0.202373],[51.550765, -0.202083],[51.550592, -0.201766],[51.550388, -0.20123],[51.550165, -0.200651],[51.549914, -0.1999],[51.549687, -0.199208],[51.549447, -0.198312],[51.54924, -0.197582],[51.548979, -0.196086],[51.548863, -0.195318],[51.548796, -0.194868],[51.548696, -0.194031],[51.548649, -0.193495],[51.548653, -0.193248],[51.548646, -0.192915],[51.548643, -0.192615],[51.548626, -0.192336],[51.548613, -0.192035],[51.548579, -0.191612],[51.548563, -0.191408],[51.548536, -0.191075],[51.548503, -0.191011],[51.548396, -0.190995],[51.548232, -0.190989],[51.547949, -0.191005],[51.547632, -0.191038],[51.547475, -0.191064],[51.547261, -0.191075],[51.547171, -0.191086],[51.547004, -0.191102],[51.546777, -0.191113],[51.546397, -0.191145],[51.54627, -0.191156],[51.546083, -0.191215],[51.545863, -0.19129],[51.545679, -0.191376],[51.545419, -0.191515],[51.545165, -0.191633],[51.544958, -0.191751],[51.544822, -0.191885],[51.544688, -0.192175],[51.544575, -0.192422],[51.544505, -0.192508],[51.544414, -0.192567],[51.544238, -0.192642],[51.544041, -0.192701],[51.543944, -0.192701],[51.5437, -0.192652],[51.543607, -0.192668],[51.54348, -0.192701],[51.543273, -0.19284],[51.543089, -0.192931],[51.542933, -0.192985],[51.542682, -0.193124],[51.542549, -0.193178],[51.542415, -0.193194],[51.542322, -0.193189],[51.542212, -0.193092],[51.542082, -0.192899],[51.541942, -0.192695],[51.541885, -0.192615],[51.541691, -0.192502],[51.541571, -0.192438],[51.541414, -0.192373],[51.541288, -0.192309],[51.541181, -0.192245],[51.541114, -0.1921],[51.541057, -0.191923],[51.541034, -0.191837],[51.54092, -0.191842],[51.540844, -0.191794],[51.540787, -0.191665],[51.54075, -0.191563],[51.540667, -0.191547],[51.540573, -0.191569],[51.54049, -0.191574],[51.540406, -0.191563],[51.54026, -0.191515],[51.540083, -0.191419],[51.539902, -0.19136],[51.539806, -0.191349],[51.539712, -0.191376],[51.539609, -0.191478],[51.539402, -0.191864],[51.539228, -0.192298],[51.539101, -0.192615],[51.538975, -0.192856],[51.538848, -0.193039],[51.538748, -0.19313],[51.538143, -0.193634],[51.539352, -0.195007],[51.5408, -0.196654],[51.542539, -0.198773],[51.543814, -0.200307],[51.544665, -0.201268],[51.545803, -0.202475],[51.547726, -0.204508],[51.549147, -0.206031],[51.550135, -0.207083]	
],	{ weight:4,  opacity: 0.2, fillOpacity: 0.5, fillColor: '#a9def9'}).bindPopup('Kilburn Ward', {sticky: 'true', position: 'left', autoClose: false, closeOnClick: false});

var WE1965 = L.polygon([
[51.550181, -0.207147],[51.550241, -0.207227],[51.550615, -0.207742],[51.550989, -0.208247],[51.551359, -0.208789],[51.55169, -0.209261],[51.55204, -0.209749],[51.55233, -0.21013],[51.552667, -0.210602],[51.553091, -0.21117],[51.553381, -0.211503],[51.553658, -0.211836],[51.553892, -0.212114],[51.554259, -0.212528],[51.554823, -0.21315],[51.555046, -0.213386],[51.5552, -0.213498],[51.555423, -0.213059],[51.555604, -0.212769],[51.55581, -0.212409],[51.556004, -0.212055],[51.556164, -0.211701],[51.556365, -0.211068],[51.556515, -0.210639],[51.556745, -0.210001],[51.556245, -0.209518],[51.555841, -0.209137],[51.555751, -0.209051],[51.555854, -0.208392],[51.556111, -0.20734],[51.556235, -0.206836],[51.556358, -0.206198],[51.556362, -0.205972],[51.555724, -0.205843],[51.555545, -0.205795],[51.555388, -0.205725],[51.555274, -0.205699],[51.555488, -0.204594],[51.555608, -0.203832],[51.555665, -0.203193],[51.555798, -0.20234],[51.556018, -0.201048],[51.556095, -0.200479],[51.556152, -0.20005],[51.556222, -0.199363],[51.556228, -0.199315],[51.556498, -0.199433],[51.556792, -0.199524],[51.556965, -0.199519],[51.557092, -0.199471],[51.557282, -0.199336],[51.557459, -0.19917],[51.557713, -0.198966],[51.557943, -0.198741],[51.55807, -0.198623],[51.558117, -0.198569],[51.558464, -0.198607],[51.55863, -0.198575],[51.558857, -0.198441],[51.559101, -0.198092],[51.559488, -0.197502],[51.559718, -0.197282],[51.559668, -0.197073],[51.559394, -0.196944],[51.55927, -0.196858],[51.559073, -0.19674],[51.558946, -0.196579],[51.55877, -0.196413],[51.558469, -0.196145],[51.558246, -0.195994],[51.557899, -0.195817],[51.557699, -0.19571],[51.557425, -0.195592],[51.557091, -0.195399],[51.556788, -0.195152],[51.556577, -0.194938],[51.556284, -0.194562],[51.556001, -0.194176],[51.555798, -0.193865],[51.555591, -0.193511],[51.555388, -0.193151],[51.555097, -0.19262],[51.554703, -0.191907],[51.554266, -0.191107],[51.553699, -0.190099],[51.553289, -0.189364],[51.552925, -0.188704],[51.552875, -0.18887],[51.552752, -0.189391],[51.552588, -0.190024],[51.552361, -0.190828],[51.552174, -0.191697],[51.552054, -0.192105],[51.551951, -0.192406],[51.551881, -0.192604],[51.551811, -0.19254],[51.551654, -0.192234],[51.551539, -0.192003],[51.551432, -0.19181],[51.551332, -0.191724],[51.551182, -0.191612],[51.551045, -0.191504],[51.550928, -0.191461],[51.550754, -0.191419],[51.550541, -0.191365],[51.550391, -0.19136],[51.550191, -0.191381],[51.549934, -0.191435],[51.549693, -0.191483],[51.549543, -0.191483],[51.549323, -0.191386],[51.549079, -0.191215],[51.548862, -0.191113],[51.548676, -0.191054],[51.548542, -0.191027],[51.548503, -0.191011],[51.548536, -0.191075],[51.548563, -0.191408],[51.548579, -0.191612],[51.548613, -0.192035],[51.548626, -0.192336],[51.548643, -0.192615],[51.548646, -0.192915],[51.548653, -0.193248],[51.548649, -0.193495],[51.548696, -0.194031],[51.548796, -0.194868],[51.548863, -0.195318],[51.548979, -0.196086],[51.54924, -0.197582],[51.549447, -0.198312],[51.549687, -0.199208],[51.549914, -0.1999],[51.550165, -0.200651],[51.550388, -0.20123],[51.550592, -0.201766],[51.550765, -0.202083],[51.550895, -0.202373],[51.551072, -0.202678],[51.551086, -0.202973],[51.551086, -0.203226],[51.551089, -0.203354],[51.551092, -0.203574],[51.551079, -0.203757],[51.551069, -0.203987],[51.551059, -0.204143],[51.551046, -0.204304],[51.551039, -0.204497],[51.551029, -0.204653],[51.550992, -0.204991],[51.550935, -0.205291],[51.550845, -0.205575],[51.550735, -0.205908],[51.550588, -0.206262],[51.550472, -0.206535],[51.550368, -0.206782],[51.550258, -0.207029],[51.550181, -0.207147]
],	{ weight:4,  opacity: 0.2, fillOpacity: 0.5, fillColor: '#d3f8e2'}).bindPopup('West End Ward', {sticky: 'true', position: 'left', autoClose: false, closeOnClick: false});

var Central1965 = L.polygon([
[51.552925, -0.188704],[51.552875, -0.18887],[51.552752, -0.189391],[51.552588, -0.190024],[51.552361, -0.190828],[51.552174, -0.191697],[51.552054, -0.192105],[51.551951, -0.192406],[51.551881, -0.192604],[51.551811, -0.19254],[51.551654, -0.192234],[51.551539, -0.192003],[51.551432, -0.19181],[51.551332, -0.191724],[51.551182, -0.191612],[51.551045, -0.191504],[51.550928, -0.191461],[51.550754, -0.191419],[51.550541, -0.191365],[51.550391, -0.19136],[51.550191, -0.191381],[51.549934, -0.191435],[51.549693, -0.191483],[51.549543, -0.191483],[51.549323, -0.191386],[51.549079, -0.191215],[51.548862, -0.191113],[51.548676, -0.191054],[51.548542, -0.191027],[51.548503, -0.191011],[51.548396, -0.190995],[51.548232, -0.190989],[51.547949, -0.191005],[51.547632, -0.191038],[51.547475, -0.191064],[51.547261, -0.191075],[51.547171, -0.191086],[51.547004, -0.191102],[51.546777, -0.191113],[51.546397, -0.191145],[51.54627, -0.191156],[51.546083, -0.191215],[51.545863, -0.19129],[51.545679, -0.191376],[51.545419, -0.191515],[51.545165, -0.191633],[51.544958, -0.191751],[51.544822, -0.191885],[51.544688, -0.192175],[51.544575, -0.192422],[51.544505, -0.192508],[51.544414, -0.192567],[51.544238, -0.192642],[51.544041, -0.192701],[51.543944, -0.192701],[51.5437, -0.192652],[51.543607, -0.192668],[51.54348, -0.192701],[51.543273, -0.19284],[51.543089, -0.192931],[51.543071, -0.192856],[51.543081, -0.192593],[51.543091, -0.192352],[51.543091, -0.192068],[51.543107, -0.19159],[51.543121, -0.19107],[51.543134, -0.190501],[51.543147, -0.189868],[51.543137, -0.189573],[51.543134, -0.189348],[51.543144, -0.189085],[51.543137, -0.188946],[51.543131, -0.188828],[51.543107, -0.188538],[51.543061, -0.188254],[51.543041, -0.187969],[51.543017, -0.187647],[51.543027, -0.187256],[51.543037, -0.186816],[51.543044, -0.186494],[51.543044, -0.186022],[51.543042, -0.185689],[51.543068, -0.185405],[51.543118, -0.185105],[51.543195, -0.184793],[51.543285, -0.184456],[51.543395, -0.184107],[51.543619, -0.183522],[51.543833, -0.183066],[51.544112, -0.182503],[51.54474, -0.181457],[51.544847, -0.181274],[51.54506, -0.180936],[51.545274, -0.180582],[51.545454, -0.180293],[51.545664, -0.179965],[51.545848, -0.179676],[51.546031, -0.17922],[51.546205, -0.178903],[51.545918, -0.178587],[51.545704, -0.178292],[51.545474, -0.17775],[51.545307, -0.177283],[51.545117, -0.176779],[51.544917, -0.176296],[51.544686, -0.17591],[51.544563, -0.175781],[51.544389, -0.175583],[51.544106, -0.175368],[51.543859, -0.175202],[51.543585, -0.174918],[51.543712, -0.174891],[51.544076, -0.174875],[51.544313, -0.174853],[51.544453, -0.174864],[51.544573, -0.174891],[51.544657, -0.174944],[51.54473, -0.174816],[51.544894, -0.174424],[51.545134, -0.173861],[51.545301, -0.173534],[51.545627, -0.173019],[51.545734, -0.172863],[51.546185, -0.172718],[51.546555, -0.172616],[51.546788, -0.172632],[51.546955, -0.172643],[51.547098, -0.172622],[51.547329, -0.17252],[51.547612, -0.172375],[51.547653, -0.172321],[51.547753, -0.172187],[51.548044, -0.17179],[51.548371, -0.171323],[51.548674, -0.170884],[51.548718, -0.1709],[51.549025, -0.171216],[51.549118, -0.171372],[51.549188, -0.171484],[51.549229, -0.171549],[51.549118, -0.171651],[51.549185, -0.171779],[51.549375, -0.172273],[51.549505, -0.172584],[51.549616, -0.172847],[51.549699, -0.172933],[51.549816, -0.172965],[51.550099, -0.172927],[51.550183, -0.172895],[51.550453, -0.17348],[51.550683, -0.174016],[51.550947, -0.174569],[51.551077, -0.174832],[51.551324, -0.175159],[51.551498, -0.17539],[51.551621, -0.175508],[51.551665, -0.17569],[51.551718, -0.175883],[51.552125, -0.175899],[51.552622, -0.175915],[51.552996, -0.175921],[51.553036, -0.175921],[51.55321, -0.176017],[51.553366, -0.176189],[51.55359, -0.17643],[51.55367, -0.176548],[51.553593, -0.176704],[51.553453, -0.176972],[51.553323, -0.17723],[51.553123, -0.177611],[51.552923, -0.178024],[51.552746, -0.178362],[51.552622, -0.178624],[51.552482, -0.179021],[51.552295, -0.179552],[51.552192, -0.179853],[51.552045, -0.180266],[51.551908, -0.180641],[51.552082, -0.180663],[51.552312, -0.180717],[51.552526, -0.180759],[51.552703, -0.180818],[51.552856, -0.180926],[51.553003, -0.181071],[51.55314, -0.181258],[51.55327, -0.181446],[51.553373, -0.181634],[51.553487, -0.181811],[51.553617, -0.182009],[51.553717, -0.182149],[51.553907, -0.182299],[51.554114, -0.182465],[51.554331, -0.18261],[51.554488, -0.182728],[51.554454, -0.182905],[51.554374, -0.183211],[51.554241, -0.183694],[51.554107, -0.184236],[51.554054, -0.184541],[51.554037, -0.184729],[51.554014, -0.184965],[51.553994, -0.185169],[51.553974, -0.185325],[51.553951, -0.185453],[51.553891, -0.185582],[51.55381, -0.185738],[51.553734, -0.185872],[51.553667, -0.186054],[51.553627, -0.186258],[51.55358, -0.186489],[51.553467, -0.187009],[51.55333, -0.187545],[51.55321, -0.187937],[51.55312, -0.188259],[51.553076, -0.188382],[51.553013, -0.188575],[51.55296, -0.188683]
],	{ weight:4,  opacity: 0.2, fillOpacity: 0.5, fillColor: '#e4c1f9'}).bindPopup('Hamsptead Central Ward', {sticky: 'true', position: 'left', autoClose: false, closeOnClick: false});

var PrioryWard1965 = L.polygon([
[51.538143, -0.193634],[51.538748, -0.19313],[51.538848, -0.193039],[51.538975, -0.192856],[51.539101, -0.192615],[51.539228, -0.192298],[51.539402, -0.191864],[51.539609, -0.191478],[51.539712, -0.191376],[51.539806, -0.191349],[51.539902, -0.19136],[51.540083, -0.191419],[51.54026, -0.191515],[51.540406, -0.191563],[51.54049, -0.191574],[51.540573, -0.191569],[51.540667, -0.191547],[51.54075, -0.191563],[51.540787, -0.191665],[51.540844, -0.191794],[51.54092, -0.191842],[51.541034, -0.191837],[51.541057, -0.191923],[51.541114, -0.1921],[51.541181, -0.192245],[51.541288, -0.192309],[51.541414, -0.192373],[51.541571, -0.192438],[51.541691, -0.192502],[51.541885, -0.192615],[51.541942, -0.192695],[51.542082, -0.192899],[51.542212, -0.193092],[51.542322, -0.193189],[51.542415, -0.193194],[51.542549, -0.193178],[51.542682, -0.193124],[51.542933, -0.192985],[51.543089, -0.192931],[51.543071, -0.192856],[51.543081, -0.192593],[51.543091, -0.192352],[51.543091, -0.192068],[51.543107, -0.19159],[51.543121, -0.19107],[51.543134, -0.190501],[51.543147, -0.189868],[51.543137, -0.189573],[51.543134, -0.189348],[51.543144, -0.189085],[51.543137, -0.188946],[51.543131, -0.188828],[51.543107, -0.188538],[51.543061, -0.188254],[51.543041, -0.187969],[51.543017, -0.187647],[51.543027, -0.187256],[51.543037, -0.186816],[51.543044, -0.186494],[51.543044, -0.186022],[51.543042, -0.185689],[51.543068, -0.185405],[51.543118, -0.185105],[51.543195, -0.184793],[51.543285, -0.184456],[51.543395, -0.184107],[51.543619, -0.183522],[51.543833, -0.183066],[51.544112, -0.182503],[51.54474, -0.181457],[51.544847, -0.181274],[51.54506, -0.180936],[51.545274, -0.180582],[51.545454, -0.180293],[51.545664, -0.179965],[51.545848, -0.179676],[51.546031, -0.17922],[51.546205, -0.178903],[51.545918, -0.178587],[51.545704, -0.178292],[51.545474, -0.17775],[51.545307, -0.177283],[51.545117, -0.176779],[51.544917, -0.176296],[51.544686, -0.17591],[51.544563, -0.175781],[51.544389, -0.175583],[51.544106, -0.175368],[51.543859, -0.175202],[51.543585, -0.174918],[51.543475, -0.174837],[51.543285, -0.174639],[51.543161, -0.174499],[51.542924, -0.174279],[51.542687, -0.174054],[51.542334, -0.173759],[51.542047, -0.173485],[51.541816, -0.173281],[51.541676, -0.173196],[51.541493, -0.172992],[51.541272, -0.172815],[51.540965, -0.172514],[51.540675, -0.172246],[51.540438, -0.172021],[51.540194, -0.171785],[51.539907, -0.171511],[51.53969, -0.171286],[51.53946, -0.171044],[51.539303, -0.170862],[51.53918, -0.170685],[51.53906, -0.170492],[51.538933, -0.170208],[51.538826, -0.169945],[51.538702, -0.169671],[51.538622, -0.169478],[51.538519, -0.169623],[51.538376, -0.169886],[51.538245, -0.170111],[51.538042, -0.170454],[51.537882, -0.170728],[51.537788, -0.170878],[51.538092, -0.171382],[51.538352, -0.171838],[51.538406, -0.171908],[51.538339, -0.172058],[51.538042, -0.172675],[51.537648, -0.17348],[51.537975, -0.173882],[51.538169, -0.174091],[51.538245, -0.174124],[51.538295, -0.174129],[51.538736, -0.174065],[51.539497, -0.173925],[51.53955, -0.174714],[51.539577, -0.175132],[51.539625, -0.176001],[51.539709, -0.177187],[51.539769, -0.177986],[51.539799, -0.178297],[51.539812, -0.178415],[51.539792, -0.178855],[51.539756, -0.179204],[51.539702, -0.179531],[51.539639, -0.179821],[51.539556, -0.180159],[51.539402, -0.1807],[51.539315, -0.181049],[51.539218, -0.181355],[51.539098, -0.18172],[51.538905, -0.182347],[51.538751, -0.182809],[51.538584, -0.183297],[51.538444, -0.183667],[51.538217, -0.184203],[51.538084, -0.184456],[51.537967, -0.184622],[51.53779, -0.18481],[51.53751, -0.185105],[51.537123, -0.185502],[51.536655, -0.186006],[51.536405, -0.186269],[51.535954, -0.186757],[51.535394, -0.187368],[51.535106, -0.187701],[51.534923, -0.187894],[51.534766, -0.188211],[51.534566, -0.188624],[51.534512, -0.18872],[51.534743, -0.189015],[51.53508, -0.18945],[51.53522, -0.189713],[51.535367, -0.190002],[51.535604, -0.190496],[51.535824, -0.190893],[51.535991, -0.19114],[51.536248, -0.191429],[51.536692, -0.191917],[51.536912, -0.192175],[51.537326, -0.192679],[51.537727, -0.193151],[51.538101, -0.193596]
],	{ weight:4,  opacity: 0.2, fillOpacity: 0.5, fillColor: '#f694c1'}).bindPopup('Priory Ward', {sticky: 'true', position: 'left', autoClose: false, closeOnClick: false});


var L1947 = L.layerGroup([Kilburn1947, WE1947, Central1947, PrioryWard1947]);
var L1965 = L.layerGroup([Kilburn1965, WE1965, Central1965]);

var overlayMaps = {
    "Ward Boundaries - SW Hampstead Met Borough - 1912-1955": L1947,
	"Ward Boundaries - SW London Borough of Camden - 1955-1977": L1965
};

L.control.layers(null, overlayMaps, {collapsed: true, position: 'topleft'} ).addTo(mymap);