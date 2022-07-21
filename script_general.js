(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"borderRadius":0,"borderSize":0,"scrollBarMargin":2,"gap":10,"shadow":false,"backgroundColorRatios":[0],"definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_2D1AEF54_2227_4D9F_417E_3BAAA0869BC0","automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"id":"panorama_32BD245C_2227_538E_41B8_BF60E464E223_camera"},{"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColorDirection":"vertical","subtitlesBackgroundColor":"#000000","borderSize":0,"subtitlesHorizontalAlign":"center","playbackBarHeadShadowOpacity":0.7,"toolTipShadowOpacity":1,"subtitlesFontSize":"3vmin","displayTooltipInSurfaceSelection":true,"subtitlesBottom":50,"subtitlesVerticalAlign":"bottom","subtitlesPaddingLeft":5,"paddingLeft":0,"toolTipPaddingRight":6,"data":{"name":"Main Viewer"},"progressBarBorderColor":"#000000","id":"MainViewer","progressBarBackgroundColorRatios":[0],"surfaceReticleSelectionColor":"#FFFFFF","width":"100%","subtitlesTextShadowOpacity":1,"progressBackgroundColorDirection":"vertical","progressBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"paddingRight":0,"playbackBarLeft":0,"subtitlesBackgroundOpacity":0.2,"progressLeft":0,"playbackBarHeadHeight":15,"toolTipFontStyle":"normal","playbackBarHeadShadowColor":"#000000","vrPointerSelectionColor":"#FF6600","subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"vrPointerSelectionTime":2000,"subtitlesPaddingBottom":5,"subtitlesBorderSize":0,"subtitlesPaddingRight":5,"progressBorderColor":"#000000","vrPointerColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"firstTransitionDuration":0,"height":"100%","transitionDuration":500,"toolTipOpacity":1,"toolTipDisplayTime":600,"playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColor":["#3399FF"],"playbackBarBorderRadius":0,"subtitlesTextDecoration":"none","playbackBarProgressBorderColor":"#000000","displayTooltipInTouchScreens":true,"class":"ViewerArea","translationTransitionDuration":1000,"minHeight":50,"toolTipFontWeight":"normal","propagateClick":false,"playbackBarHeadOpacity":1,"playbackBarHeadShadow":true,"subtitlesTextShadowBlurRadius":0,"minWidth":100,"toolTipBorderColor":"#767676","toolTipShadowSpread":0,"borderRadius":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesFontFamily":"Arial","subtitlesFontColor":"#FFFFFF","toolTipFontColor":"#606060","progressBarOpacity":1,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderRadius":0,"playbackBarOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderRadius":3,"paddingTop":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowVerticalLength":0,"toolTipTextShadowOpacity":0,"toolTipTextShadowBlurRadius":3,"paddingBottom":0,"progressBottom":0,"progressBackgroundColorRatios":[0],"playbackBarBottom":5,"playbackBarProgressOpacity":1,"playbackBarBorderSize":0,"subtitlesPaddingTop":5,"progressRight":0,"toolTipPaddingBottom":4,"subtitlesShadow":false,"subtitlesFontWeight":"normal","playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"doubleClickAction":"toggle_fullscreen","playbackBarHeadShadowHorizontalLength":0,"playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":10,"toolTipPaddingTop":4,"transitionMode":"blending","playbackBarHeight":10,"subtitlesTop":0,"playbackBarHeadWidth":6,"progressOpacity":1,"progressBorderSize":0,"toolTipBorderSize":1,"progressBarBorderRadius":0,"surfaceReticleOpacity":0.6,"subtitlesOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"toolTipPaddingLeft":6,"playbackBarBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","progressBarBorderSize":0,"subtitlesEnabled":true,"toolTipShadowVerticalLength":0,"toolTipTextShadowColor":"#000000","subtitlesGap":0,"subtitlesTextShadowColor":"#000000","toolTipFontFamily":"Arial","progressBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"shadow":false,"playbackBarRight":0},{"frames":[{"thumbnailUrl":"media/panorama_32BD245C_2227_538E_41B8_BF60E464E223_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":24576,"colCount":48,"url":"media/panorama_32BD245C_2227_538E_41B8_BF60E464E223_0/{face}/0/{row}_{column}.jpg","height":4096,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":8},{"width":12288,"colCount":24,"url":"media/panorama_32BD245C_2227_538E_41B8_BF60E464E223_0/{face}/1/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_32BD245C_2227_538E_41B8_BF60E464E223_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_32BD245C_2227_538E_41B8_BF60E464E223_0/{face}/3/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_32BD245C_2227_538E_41B8_BF60E464E223_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"}}],"hfovMax":130,"label":trans('panorama_32BD245C_2227_538E_41B8_BF60E464E223.label'),"vfov":171.58,"partial":false,"class":"Panorama","overlays":["this.overlay_33072A90_2239_B496_4191_E697EDA19B5C"],"hfov":360,"thumbnailUrl":"media/panorama_32BD245C_2227_538E_41B8_BF60E464E223_t.jpg","data":{"label":"terraza1"},"pitch":0,"id":"panorama_32BD245C_2227_538E_41B8_BF60E464E223"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_32BD245C_2227_538E_41B8_BF60E464E223_camera","media":"this.panorama_32BD245C_2227_538E_41B8_BF60E464E223","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"gyroscopeVerticalDraggingEnabled":true,"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","zoomEnabled":true,"arrowKeysAction":"translate","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","displayPlaybackBar":true},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_2D1AEF54_2227_4D9F_417E_3BAAA0869BC0"},{"width":1280,"url":trans('overlay_33072A90_2239_B496_4191_E697EDA19B5C.url'),"useHandCursor":false,"height":720,"contentInteractive":true,"vertices":[{"yaw":141.17,"class":"PanoramaPoint","pitch":20.02},{"yaw":167.39,"class":"PanoramaPoint","pitch":22.88},{"yaw":167.71,"class":"PanoramaPoint","pitch":-12.07},{"yaw":141.32,"class":"PanoramaPoint","pitch":-11.27}],"class":"QuadFramePanoramaOverlay","data":{"label":"Web"},"id":"overlay_33072A90_2239_B496_4191_E697EDA19B5C"}],"width":"100%","paddingLeft":0,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"backgroundPreloadEnabled":true,"scrollBarOpacity":0.5,"backgroundColorDirection":"vertical","paddingBottom":0,"scrollBarWidth":10,"paddingRight":0,"vrPolyfillScale":0.75,"scrollBarColor":"#000000","horizontalAlign":"left","children":["this.MainViewer"],"backgroundOpacity":1,"defaultVRPointer":"laser","mobileMipmappingEnabled":false,"height":"100%","toolTipHorizontalAlign":"center","verticalAlign":"top","backgroundColor":["#FFFFFF"],"contentOpaque":false,"mediaActivationMode":"window","downloadEnabled":false,"scrollBarVisible":"rollOver","layout":"absolute","overflow":"hidden","class":"Player","desktopMipmappingEnabled":false,"start":"this.init()","minHeight":0,"propagateClick":false,"minWidth":0,"data":{"textToSpeechConfig":{"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"pitch":1,"speechOnInfoWindow":false,"rate":1},"name":"Player3914","locales":{"en":"locale/en.txt"},"defaultLocale":"en"},"defaultMenu":["fullscreen","mute","rotation"],"scripts":{"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"initQuiz":TDV.Tour.Script.initQuiz,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getKey":TDV.Tour.Script.getKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"playAudioList":TDV.Tour.Script.playAudioList,"registerKey":TDV.Tour.Script.registerKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"openLink":TDV.Tour.Script.openLink,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"clone":TDV.Tour.Script.clone,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"init":TDV.Tour.Script.init,"executeJS":TDV.Tour.Script.executeJS,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"historyGoBack":TDV.Tour.Script.historyGoBack,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizFinish":TDV.Tour.Script.quizFinish,"quizShowScore":TDV.Tour.Script.quizShowScore,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getOverlays":TDV.Tour.Script.getOverlays,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"existsKey":TDV.Tour.Script.existsKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"textToSpeech":TDV.Tour.Script.textToSpeech,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizStart":TDV.Tour.Script.quizStart,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setValue":TDV.Tour.Script.setValue,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPixels":TDV.Tour.Script.getPixels,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"cloneCamera":TDV.Tour.Script.cloneCamera,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"cloneBindings":TDV.Tour.Script.cloneBindings,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setLocale":TDV.Tour.Script.setLocale,"mixObject":TDV.Tour.Script.mixObject,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"shareSocial":TDV.Tour.Script.shareSocial,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMainViewer":TDV.Tour.Script.getMainViewer,"translate":TDV.Tour.Script.translate,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"historyGoForward":TDV.Tour.Script.historyGoForward}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Thu Jul 21 2022