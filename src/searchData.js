const searchStations = [
    {name: "Abisko Aut", key: 188790, searchName: "Abisko"},
    
    {name: "Adelsö A", key: 97280, searchName: "Adelsö"},
    
    {name: "Arjeplog A", key: 167710, searchName: "Arjeplog"},
    
    {name: "Arvidsjaur A", key: 159880, searchName: "Arvidsjaur"},
    
    {name: "Arvika A", key: 92410, searchName: "Arvika"},
    
    {name: "Axstål Mo", key: 84340, searchName: "Axstål"},
    
    {name: "Barkåkra", key: 62180, searchName: "Barkåkra"},
    
    {name: "Berga Mo", key: 98040, searchName: "Berga"},
    
    {name: "Bjuröklubb A", key: 151280, searchName: "Bjuröklubb"},
    
    {name: "Blomskog A", key: 92130, searchName: "Blomskog"},
    
    {name: "Blåhammaren A", key: 132110, searchName: "Blåhammaren"},
    
    {name: "Boden Mo", key: 161940, searchName: "Boden"},
    
    {name: "Borlänge Flygplats", key: 105260, searchName: "Borlänge Flygplats"},
    
    {name: "Borås", key: 72450, searchName: "Borås"},
    
    {name: "Brämön A", key: 127130, searchName: "Brämön"},
    
    {name: "Buresjön A", key: 157870, searchName: "Buresjön"},
    
    {name: "Börtnan A", key: 123460, searchName: "Börtnan"},
    
    {name: "Daglösen A", key: 94390, searchName: "Daglösen"},
    
    {name: "Delsbo A", key: 116490, searchName: "Delsbo"},
    
    {name: "Dravagen A", key: 123060, searchName: "Dravagen"},
    
    {name: "Edevik", key: 132590, searchName: "Edevik"},
    
    {name: "Edsbyn A", key: 115220, searchName: "Edsbyn"},
    
    {name: "Eggegrund A", key: 107440, searchName: "Eggegrund"},
    
    {name: "Enköping Mo", key: 97370, searchName: "Enköping"},
    
    {name: "Eskilstuna A", key: 96190, searchName: "Eskilstuna"},
    
    {name: "Falsterbo", key: 52230, searchName: "Falsterbo"},
    
    {name: "Falsterbo A", key: 52240, searchName: "Falsterbo"},
    
    {name: "Film A", key: 107140, searchName: "Film"},
    
    {name: "Floda A", key: 96040, searchName: "Floda"},
    
    {name: "Fredrika A", key: 148040, searchName: "Fredrika"},
    
    {name: "Frösön", key: 134110, searchName: "Frösön"},
    
    {name: "Fårösund Ar A", key: 78550, searchName: "Fårösund"},
    
    {name: "Föllinge A", key: 134410, searchName: "Föllinge"},
    
    {name: "Gielas A", key: 155790, searchName: "Gielas"},
    
    {name: "Gladhammar A", key: 76420, searchName: "Gladhammar"},
    
    {name: "Gotska Sandön A", key: 89230, searchName: "Gotska Sandön"},
    
    {name: "Gubbhögen A", key: 145130, searchName: "Gubbhögen"},
    
    {name: "Gunnarn A", key: 147560, searchName: "Gunnarn"},
    
    {name: "Gustavsfors", key: 103090, searchName: "Gustavsfors"},
    
    {name: "Gustavsfors A", key: 103100, searchName: "Gustavsfors"},
    
    {name: "Gäddede A", key: 144310, searchName: "Gäddede"},
    
    {name: "Gällivare A", key: 180760, searchName: "Gällivare"},
    
    {name: "Gävle A", key: 107420, searchName: "Gävle"},
    
    {name: "Gårdsjö A", key: 84520, searchName: "Gårdsjö"},
    
    {name: "Göteborg A", key: 71420, searchName: "Göteborg"},
    
    {name: "Hagshult Mo", key: 74180, searchName: "Hagshult"},
    
    {name: "Hallands Väderö A", key: 62260, searchName: "Hallands Väderö"},
    
    {name: "Hallhåxåsen A", key: 135460, searchName: "Hallhåxåsen"},
    
    {name: "Hamra A", key: 114410, searchName: "Hamra"},
    
    {name: "Hanö A", key: 64020, searchName: "Hanö"},
    
    {name: "Haparanda A", key: 163960, searchName: "Haparanda"},
    
    {name: "Harstena A", key: 87140, searchName: "Harstena"},
    
    {name: "Helsingborg A", key: 62040, searchName: "Helsingborg"},
    
    {name: "Hemavan Flygplats", key: 155970, searchName: "Hemavan Flygplats"},
    
    {name: "Hemavan-Gierevarto A", key: 155960, searchName: "Hemavan-Gierevarto"},
    
    {name: "Hemling A", key: 138390, searchName: "Hemling"},
    
    {name: "Hestra D", key: 73230, searchName: "Hestra"},
    
    {name: "Hoburg A", key: 68560, searchName: "Hoburg"},
    
    {name: "Holmön A", key: 140460, searchName: "Holmön"},
    
    {name: "Horn A", key: 75520, searchName: "Horn"},
    
    {name: "Hoting A", key: 146050, searchName: "Hoting"},
    
    {name: "Hunge A", key: 125440, searchName: "Hunge"},
    
    {name: "Hällum A", key: 83190, searchName: "Hällum"},
    
    {name: "Hästveda Mo", key: 63160, searchName: "Hästveda"},
    
    {name: "Hörby A", key: 53530, searchName: "Hörby"},
    
    {name: "Idre Fjäll A", key: 112540, searchName: "Idre Fjäll"},
    
    {name: "Jokkmokk Flygplats Mo", key: 170860, searchName: "Jokkmokk Flygplats"},
    
    {name: "Junsele A", key: 136410, searchName: "Junsele"},
    
    {name: "Järnäsklubb A", key: 139260, searchName: "Järnäsklubb"},
    
    {name: "Jönköpings flygplats", key: 74460, searchName: "Jönköpings flygplats"},
    
    {name: "Kalmar flygplats", key: 66420, searchName: "Kalmar flygplats"},
    
    {name: "Karesuando A", key: 192840, searchName: "Karesuando"},
    
    {name: "Karlsborg Mo", key: 84310, searchName: "Karlsborg"},
    
    {name: "Karlshamn", key: 64130, searchName: "Karlshamn"},
    
    {name: "Karlskrona-Söderstjerna Mo", key: 65090, searchName: "Karlskrona-Söderstjerna"},
    
    {name: "Karlstad Flygplats", key: 93220, searchName: "Karlstad Flygplats"},
    
    {name: "Katterjåkk", key: 188820, searchName: "Katterjåkk"},
    
    {name: "Katterjåkk A", key: 188850, searchName: "Katterjåkk"},
    
    {name: "Kerstinbo A", key: 106160, searchName: "Kerstinbo"},
    
    {name: "Kettstaka A", key: 85460, searchName: "Kettstaka"},
    
    {name: "Kilsbergen-Suttarboda A", key: 94190, searchName: "Kilsbergen-Suttarboda"},
    
    {name: "Kiruna Flygplats", key: 180940, searchName: "Kiruna Flygplats"},
    
    {name: "Kloten A", key: 95540, searchName: "Kloten"},
    
    {name: "Klövsjöhöjden A", key: 124300, searchName: "Klövsjöhöjden"},
    
    {name: "Kolmården-Strömsfors A", key: 86420, searchName: "Kolmården-Strömsfors"},
    
    {name: "Korsvattnet A", key: 133500, searchName: "Korsvattnet"},
    
    {name: "Kosta Mo", key: 65510, searchName: "Kosta"},
    
    {name: "Kroppefjäll-Granan A", key: 82360, searchName: "Kroppefjäll-Granan"},
    
    {name: "Krångede A", key: 136090, searchName: "Krångede"},
    
    {name: "Kuggören A", key: 117430, searchName: "Kuggören"},
    
    {name: "Kvarn Mo", key: 85390, searchName: "Kvarn"},
    
    {name: "Kvikkjokk-Årrenjarka A", key: 167990, searchName: "Kvikkjokk-Årrenjarka"},
    
    {name: "Lainio", key: 182930, searchName: "Lainio"},
    
    {name: "Lakaträsk A", key: 171790, searchName: "Lakaträsk"},
    
    {name: "Landsort A", key: 87440, searchName: "Landsort"},
    
    {name: "Landvetter Flygplats", key: 72420, searchName: "Landvetter Flygplats"},
    
    {name: "Latnivaara A", key: 180770, searchName: "Latnivaara"},
    
    {name: "Ljungby A", key: 63510, searchName: "Ljungby"},
    
    {name: "Luleå Flygplats", key: 162860, searchName: "Luleå Flygplats"},
    
    {name: "Lungö A", key: 128390, searchName: "Lungö"},
    
    {name: "Lycksele A", key: 148330, searchName: "Lycksele"},
    
    {name: "Malexander A", key: 85050, searchName: "Malexander"},
    
    {name: "Malmslätt", key: 85240, searchName: "Malmslätt"},
    
    {name: "Malmö A", key: 52350, searchName: "Malmö"},
    
    {name: "Malung A", key: 103420, searchName: "Malung"},
    
    {name: "Malå-Brännan A", key: 158740, searchName: "Malå-Brännan"},
    
    {name: "Mierkenis A", key: 166910, searchName: "Mierkenis"},
    
    {name: "Mora A", key: 104580, searchName: "Mora"},
    
    {name: "Målilla A", key: 75250, searchName: "Målilla A"},
    
    {name: "Måseskär A", key: 81050, searchName: "Måseskär A"},
    
    {name: "Naimakka A", key: 191910, searchName: "Naimakka A"},
    
    {name: "Nattavaara A", key: 170930, searchName: "Nattavaara A"},
    
    {name: "Naven A", key: 83420, searchName: "Naven A"},
    
    {name: "Nidingen A", key: 71190, searchName: "Nidingen A"},
    
    {name: "Nikkaluokta A", key: 179960, searchName: "Nikkaluokta A"},
    
    {name: "Nordkoster A", key: 81540, searchName: "Nordkoster A"},
    
    {name: "Norrköping-SMHI", key: 86340, searchName: "Norrköping-SMHI"},
    
    {name: "Norsjö A", key: 149560, searchName: "Norsjö A"},
    
    {name: "Paharova A", key: 172940, searchName: "Paharova A"},
    
    {name: "Pajala A", key: 183750, searchName: "Pajala A"},
    
    {name: "Parkalompolo A", key: 182910, searchName: "Parkalompolo A"},
    
    {name: "Petisträsk A", key: 149340, searchName: "Petisträsk A"},
    
    {name: "Pite-Rönnskär A", key: 161710, searchName: "Pite-Rönnskär A"},
    
    {name: "Pålgrunden A", key: 83450, searchName: "Pålgrunden A"},
    
    {name: "Rensjön A", key: 189720, searchName: "Rensjön A"},
    
    {name: "Ritsem A", key: 177930, searchName: "Ritsem A"},
    
    {name: "Ronneby-Bredåkra", key: 65160, searchName: "Ronneby-Bredåkra"},
    
    {name: "Rångedala A", key: 73480, searchName: "Rångedala A"},
    
    {name: "Rödkallen A", key: 162790, searchName: "Rödkallen A"},
    
    {name: "Saittarova A", key: 182810, searchName: "Saittarova A"},
    
    {name: "Sala A", key: 96560, searchName: "Sala A"},
    
    {name: "Skagsudde A", key: 139120, searchName: "Skagsudde A"},
    
    {name: "Skarpö A", key: 98160, searchName: "Skarpö A"},
    
    {name: "Skellefteå Flygplats", key: 151380, searchName: "Skellefteå Flygplats"},
    
    {name: "Skillinge A", key: 54290, searchName: "Skillinge A"},
    
    {name: "Stekenjokk A", key: 154730, searchName: "Stekenjokk A"},
    
    {name: "Stockholm", key: 98210, searchName: "Stockholm"},
    
    {name: "Stockholm A", key: 98230, searchName: "Stockholm A"},
    
    {name: "Stockholm-Arlanda", key: 97400, searchName: "Stockholm-Arlanda"},
    
    {name: "Stockholm-Bromma", key: 97200, searchName: "Stockholm-Bromma"},
    
    {name: "Stora Sjöfallet A", key: 178860, searchName: "Stora Sjöfallet A"},
    
    {name: "Stora Spånsberget A", key: 105220, searchName: "Stora Spånsberget A"},
    
    {name: "Storlien-Storvallen A", key: 132170, searchName: "Storlien-Storvallen A"},
    
    {name: "Storön A", key: 163900, searchName: "Storön A"},
    
    {name: "Sturup", key: 53300, searchName: "Sturup"},
    
    {name: "Sundsvalls Flygplats", key: 127310, searchName: "Sundsvalls Flygplats"},
    
    {name: "Sunne A", key: 93520, searchName: "Sunne A"},
    
    {name: "Svanberga A", key: 98490, searchName: "Svanberga A"},
    
    {name: "Sveg A", key: 124030, searchName: "Sveg A"},
    
    {name: "Svenska Högarna", key: 99270, searchName: "Svenska Högarna"},
    
    {name: "Svenska Högarna A", key: 99280, searchName: "Svenska Högarna A"},
    
    {name: "Sylarna A", key: 132030, searchName: "Sylarna A"},
    
    {name: "Såtenäs", key: 82260, searchName: "Såtenäs"},
    
    {name: "Söderarm A", key: 99450, searchName: "Söderarm A"},
    
    {name: "Tarfala A", key: 178970, searchName: "Tarfala A"},
    
    {name: "Tjåkaape Mo", key: 169790, searchName: "Tjåkaape Mo"},
    
    {name: "Tomtabacken A", key: 74300, searchName: "Tomtabacken A"},
    
    {name: "Torpshammar A", key: 126290, searchName: "Torpshammar A"},
    
    {name: "Torup A", key: 63590, searchName: "Torup A"},
    
    {name: "Tullinge A", key: 97100, searchName: "Tullinge A"},
    
    {name: "Tännäs A", key: 122260, searchName: "Tännäs A"},
    
    {name: "Ullared A", key: 72090, searchName: "Ullared A"},
    
    {name: "Umeå Flygplats", key: 140480, searchName: "Umeå Flygplats"},
    
    {name: "Uppsala Aut", key: 97510, searchName: "Uppsala Aut"},
    
    {name: "Uppsala Flygplats", key: 97530, searchName: "Uppsala Flygplats"},
    
    {name: "Utklippan A", key: 55570, searchName: "Utklippan A"},
    
    {name: "Vidsel", key: 160960, searchName: "Vidsel"},
    
    {name: "Vidsel Mo", key: 160970, searchName: "Vidsel Mo"},
    
    {name: "Vilhelmina A", key: 146350, searchName: "Vilhelmina A"},
    
    {name: "Vindeln-Sunnansjönäs", key: 149120, searchName: "Vindeln-Sunnansjönäs"},
    
    {name: "Vinga A", key: 71380, searchName: "Vinga A"},
    
    {name: "Visby Flygplats", key: 78400, searchName: "Visby Flygplats"},
    
    {name: "Visingsö A", key: 84050, searchName: "Visingsö A"},
    
    {name: "Väderöarna A", key: 81350, searchName: "Väderöarna A"},
    
    {name: "Västmarkum A", key: 138070, searchName: "Västmarkum A"},
    
    {name: "Växjö A", key: 64510, searchName: "Växjö A"},
    
    {name: "Ylinenjärvi A", key: 173900, searchName: "Ylinenjärvi A"},
    
    {name: "Zinkgruvan", key: 85490, searchName: "Zinkgruvan"},
    
    {name: "Älvdalen A", key: 114140, searchName: "Älvdalen A"},
    
    {name: "Älvsbyn A", key: 161910, searchName: "Älvsbyn A"},
    
    {name: "Åmot A", key: 106570, searchName: "Åmot A"},
    
    {name: "Åsele A", key: 147090, searchName: "Åsele A"},
    
    {name: "Åtorp", key: 94050, searchName: "Åtorp"},
    
    {name: "Ölands norra udde", key: 77220, searchName: "Ölands norra udde"},
    
    {name: "Ölands norra udde A", key: 77210, searchName: "Ölands norra udde A"},
    
    {name: "Ölands södra udde A", key: 66110, searchName: "Ölands södra udde A"},
    
    {name: "Örebro Flygplats", key: 95130, searchName: "Örebro Flygplats"},
    
    {name: "Örnsköldsviks Flygplats", key: 138240, searchName: "Örnsköldsviks Flygplats"},
    
    {name: "Örskär A", key: 108320, searchName: "Örskär A"},
    
    {name: "Östergarnsholm A", key: 78280, searchName: "Östergarnsholm A"},
    
    {name: "Överkalix-Svartbyn A", key: 172770, searchName: "Överkalix-Svartbyn A"},
    
    ]