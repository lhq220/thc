var init = {
    Config:({
        url: 'http://thamhaucung.blogspot.com/',
        urlHotNews: 'feeds/posts/default?alt=json&max-results=6',
        urltabTin: 'feeds/posts/default/-/Thông%20tin?alt=json&max-results=6',
        urltabEvent: 'feeds/posts/default/-/Event?alt=json&max-results=6',
        urltabHd: 'feeds/posts/default/-/Hướng%20dẫn?alt=json&max-results=6',
        urltabMedia: 'feeds/posts/default/-/Video?alt=json&max-results=6',

        urltabTieuSu: 'feeds/posts/default/-/Tiêu%20Sư?alt=json&max-results=3',
        urltabThoSan: 'feeds/posts/default/-/Thợ%20Săn?alt=json&max-results=3',
        urltabVanSi: 'feeds/posts/default/-/Văn%20Sĩ?alt=json&max-results=3',
        urltabNhacLinh: 'feeds/posts/default/-/Nhạc%20Linh?alt=json&max-results=3',
        urltabBoKhoai: 'feeds/posts/default/-/Bổ%20Khoái?alt=json&max-results=3',
        urltabDuHiep: 'feeds/posts/default/-/Du%20Hiệp?alt=json&max-results=3',
        urltabSatthu: 'feeds/posts/default/-/Sát%20Thủ?alt=json&max-results=3',
    }),
    Main:() =>{
        init.tabNews('#hotnews', init.Config.urlHotNews)
        init.tabNews('#tabtin', init.Config.urltabTin)
        init.tabNews('#tabevent', init.Config.urltabEvent)
        init.tabNews('#tabhd', init.Config.urltabHd)
        init.tabNews('#tabMedia', init.Config.urltabMedia)
        
        init.tabNews('#tabdon', init.Config.urlHotNews)
        init.tabNews('#tab8x', init.Config.urltabTin)
        init.tabNews('#tab9x', init.Config.urltabEvent)
        init.tabNews('#tab10x', init.Config.urltabHd)

        init.tabNews('#tabWGtin', init.Config.urlHotNews)
        init.tabNews('#tabWGVideo', init.Config.urltabTin)
        init.tabNews('#tabWGAnh', init.Config.urltabEvent)

        init.tabNews('#tabTieuSu', init.Config.urltabTieuSu)
        init.tabNews('#tabThoSan', init.Config.urltabThoSan)
        init.tabNews('#tabVanSi', init.Config.urltabVanSi)
        init.tabNews('#tabNhacLinh', init.Config.urltabBoKhoai)
        init.tabNews('#tabBoKhoai', init.Config.urltabBoKhoai)
        init.tabNews('#tabDuHiep', init.Config.urltabDuHiep)
        init.tabNews('#tabSatThu', init.Config.urltabSatthu)
    },
    tabNews: (e, f) =>{
        $.ajax({
            url: init.Config.url + f,
            dataType: 'jsonp',
            success: function(dataWeGotViaJsonp){
                var html ='';      
                dataWeGotViaJsonp.feed.entry.map((i,k)=>{
                    var date = new Date(i.published.$t);
                    html += `<li class="nl-i">
                        <a class="cltit" target="_blank" href="${i.link[4].href}" title="">${i.title.$t}</a>
                        <span class="cltime">${date.getDate()}/${date.getMonth()}</span>
                    </li>`;
                })
                $(e).html(html)
            }
        });
    },
    
}