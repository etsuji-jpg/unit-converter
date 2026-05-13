import { useState, useMemo } from "react";

// ============================================================
// タイピング基礎 データ
// ============================================================
const TB_EIGO_TO_TAPII = {
  "1-1":{page:1,stage:"ステージ1"},"1-2":{page:1,stage:"ステージ2"},
  "1-3":{page:1,stage:"ステージ3"},"1-4":{page:1,stage:"ステージ4"},
  "1-5":{page:1,stage:"ステージ5"},"1-6":{page:1,stage:"ステージ6"},
  "1-7":{page:1,stage:"ステージ7"},"1-8":{page:1,stage:"ステージ8"},
  "1-9":{page:1,stage:"ステージ9"},"1-10":{page:1,stage:"ステージ10"},
  "1-11":{page:1,stage:"ステージ11"},"1-12":{page:1,stage:"ステージ12"},
  "1-13":{page:1,stage:"ステージ13"},"1-14":{page:1,stage:"ステージ14"},
  "1-15":{page:1,stage:"ステージ15"},"1-16":{page:1,stage:"ステージ16"},
  "1-17":{page:1,stage:"ステージ17"},"1-18":{page:1,stage:"ステージ18"},
  "1-19":{page:1,stage:"ステージ19"},"1-20":{page:2,stage:"ステージ1"},
  "1-21":{page:2,stage:"ステージ2"},"1-22":{page:2,stage:"ステージ3"},
  "1-23":{page:2,stage:"ステージ4"},"1-24":{page:2,stage:"ステージ5"},
  "1-25":{page:2,stage:"ステージ6"},"1-26":{page:2,stage:"ステージ7"},
  "1-27":{page:2,stage:"ステージ8"},"1-28":{page:2,stage:"ステージ9"},
  "1-29":{page:2,stage:"ステージ10"},"1-30":{page:2,stage:"ステージ11"},
  "1-31":{page:2,stage:"ステージ12"},"1-32":{page:2,stage:"ステージ13"},
  "1-33":{page:2,stage:"ステージ14"},"1-34":{page:2,stage:"ステージ15"},
  "1-35":{page:2,stage:"ステージ16"},"1-36":{page:2,stage:"ステージ17"},
  "2-1":{page:2,stage:"ステージ18"},"2-2":{page:2,stage:"ステージ19"},
  "2-3":{page:3,stage:"ステージ1"},"2-4":{page:3,stage:"ステージ2"},
  "2-5":{page:3,stage:"ステージ3"},"2-6":{page:3,stage:"ステージ4"},
  "2-7":{page:3,stage:"ステージ5"},"2-8":{page:3,stage:"ステージ6"},
  "2-9":{page:3,stage:"ステージ7"},"2-10":{page:3,stage:"ステージ8"},
  "2-11":{page:3,stage:"ステージ9"},"2-12":{page:3,stage:"ステージ10"},
  "2-13":{page:3,stage:"ステージ11"},"2-14":{page:3,stage:"ステージ12"},
  "2-15":{page:3,stage:"ステージ13"},"2-16":{page:3,stage:"ステージ14"},
  "2-17":{page:3,stage:"ステージ15"},"2-18":{page:3,stage:"ステージ16"},
  "2-19":{page:3,stage:"ステージ17"},"2-20":{page:3,stage:"ステージ18"},
  "2-21":{page:4,stage:"ステージ1"},"2-22":{page:4,stage:"ステージ2"},
  "2-23":{page:4,stage:"ステージ3"},"2-24":{page:4,stage:"ステージ4"},
  "2-25":{page:4,stage:"ステージ5"},"2-26":{page:4,stage:"ステージ6"},
  "2-27":{page:4,stage:"ステージ7"},"2-28":{page:4,stage:"ステージ8"},
  "2-29":{page:4,stage:"ステージ9"},"2-30":{page:4,stage:"ステージ10"},
  "2-31":{page:4,stage:"ステージ11"},"2-32":{page:4,stage:"ステージ12"},
  "2-33":{page:4,stage:"ステージ13"},"2-34":{page:4,stage:"ステージ14"},
  "3-1":{page:4,stage:"ステージ15"},"3-2":{page:4,stage:"ステージ16"},
  "3-3":{page:4,stage:"ステージ17"},"3-4":{page:4,stage:"ステージ18"},
  "3-5":{page:4,stage:"ステージ19"},"3-6":{page:5,stage:"ステージ1"},
  "3-7":{page:5,stage:"ステージ2"},"3-8":{page:5,stage:"ステージ3"},
  "3-9":{page:5,stage:"ステージ4"},"3-10":{page:5,stage:"ステージ5"},
  "3-11":{page:5,stage:"ステージ6"},"3-12":{page:5,stage:"ステージ7"},
  "3-13":{page:5,stage:"ステージ8"},"3-14":{page:5,stage:"ステージ9"},
  "3-15":{page:5,stage:"ステージ10"},"3-16":{page:5,stage:"ステージ11"},
  "3-17":{page:5,stage:"ステージ12"},"3-18":{page:5,stage:"ステージ13"},
  "3-19":{page:5,stage:"ステージ14"},"3-20":{page:5,stage:"ステージ15"},
  "3-21":{page:5,stage:"ステージ16"},"3-22":{page:5,stage:"ステージ17"},
  "3-23":{page:5,stage:"ステージ18"},"3-24":{page:6,stage:"ステージ1"},
  "3-25":{page:6,stage:"ステージ2"},"3-26":{page:6,stage:"ステージ3"},
  "3-27":{page:6,stage:"ステージ4"},"4-1":{page:6,stage:"ステージ5"},
  "4-2":{page:6,stage:"ステージ6"},"4-3":{page:6,stage:"ステージ7"},
  "4-4":{page:6,stage:"ステージ8"},"4-5":{page:6,stage:"ステージ9"},
  "4-6":{page:6,stage:"ステージ10"},"4-7":{page:6,stage:"ステージ11"},
  "4-8":{page:6,stage:"ステージ12"},"4-9":{page:6,stage:"ステージ13"},
  "4-10":{page:6,stage:"ステージ14"},"4-11":{page:6,stage:"ステージ15"},
  "4-12":{page:6,stage:"ステージ16"},"4-13":{page:6,stage:"ステージ17"},
  "4-14":{page:6,stage:"ステージ18"},"4-15":{page:6,stage:"ステージ19"},
  "4-16":{page:7,stage:"ステージ1"},"4-17":{page:7,stage:"ステージ2"},
  "4-18":{page:7,stage:"ステージ3"},"4-19":{page:7,stage:"ステージ4"},
  "4-20":{page:7,stage:"ステージ5"},"4-21":{page:7,stage:"ステージ6"},
  "4-22":{page:7,stage:"ステージ7"},"4-23":{page:7,stage:"ステージ8"},
  "4-24":{page:7,stage:"ステージ9"},"4-25":{page:7,stage:"ステージ10"},
  "5-1":{page:7,stage:"ステージ11"},"5-2":{page:7,stage:"ステージ12"},
  "5-3":{page:7,stage:"ステージ13"},"5-4":{page:7,stage:"ステージ14"},
  "5-5":{page:7,stage:"ステージ15"},"5-6":{page:7,stage:"ステージ16"},
  "5-7":{page:7,stage:"ステージ17"},"5-8":{page:7,stage:"ステージ18"},
  "5-9":{page:7,stage:"ステージ19"},"5-10":{page:7,stage:"ステージ20"},
  "5-11":{page:8,stage:"ステージ1"},"5-12":{page:8,stage:"ステージ2"},
  "5-13":{page:8,stage:"ステージ3"},"5-14":{page:8,stage:"ステージ4"},
  "5-15":{page:8,stage:"ステージ5"},"5-16":{page:8,stage:"ステージ6"},
  "5-17":{page:8,stage:"ステージ7"},"5-18":{page:8,stage:"ステージ8"},
  "5-19":{page:8,stage:"ステージ9"},"5-20":{page:8,stage:"ステージ10"},
  "6-1":{page:8,stage:"ステージ11"},"6-2":{page:8,stage:"ステージ12"},
  "6-3":{page:8,stage:"ステージ13"},"6-4":{page:8,stage:"ステージ14"},
  "6-5":{page:8,stage:"ステージ15"},"6-6":{page:8,stage:"ステージ16"},
  "6-7":{page:8,stage:"ステージ17"},"6-8":{page:8,stage:"ステージ18"},
  "6-9":{page:9,stage:"ステージ1"},"6-10":{page:9,stage:"ステージ2"},
  "6-11":{page:9,stage:"ステージ3"},"6-12":{page:9,stage:"ステージ4"},
  "6-13":{page:9,stage:"ステージ5"},"6-14":{page:9,stage:"ステージ6"},
  "6-15":{page:9,stage:"ステージ7"},"6-16":{page:9,stage:"ステージ8"},
  "6-17":{page:9,stage:"ステージ9"},"6-18":{page:9,stage:"ステージ10"},
  "6-19":{page:9,stage:"ステージ11"},"6-20":{page:9,stage:"ステージ12"},
  "6-21":{page:9,stage:"ステージ13"},
};

const TB_TAPII_TO_EIGO = {
  1:{unit:1,sub:1},2:{unit:1,sub:2},3:{unit:1,sub:3},4:{unit:1,sub:4},
  5:{unit:1,sub:5},7:{unit:1,sub:6},8:{unit:1,sub:7},9:{unit:1,sub:8},
  10:{unit:1,sub:9},11:{unit:1,sub:10},12:{unit:1,sub:11},14:{unit:1,sub:12},
  15:{unit:1,sub:13},16:{unit:1,sub:14},17:{unit:1,sub:15},18:{unit:1,sub:16},
  19:{unit:1,sub:17},21:{unit:1,sub:18},22:{unit:1,sub:19},23:{unit:1,sub:20},
  24:{unit:1,sub:21},26:{unit:1,sub:22},27:{unit:1,sub:23},28:{unit:1,sub:24},
  29:{unit:1,sub:25},30:{unit:1,sub:26},31:{unit:1,sub:27},33:{unit:1,sub:28},
  34:{unit:1,sub:29},35:{unit:1,sub:30},36:{unit:1,sub:31},37:{unit:1,sub:32},
  38:{unit:1,sub:33},39:{unit:1,sub:34},41:{unit:1,sub:35},42:{unit:1,sub:36},
  43:{unit:2,sub:1},44:{unit:2,sub:2},45:{unit:2,sub:3},46:{unit:2,sub:4},
  47:{unit:2,sub:5},48:{unit:2,sub:6},50:{unit:2,sub:7},51:{unit:2,sub:8},
  52:{unit:2,sub:9},53:{unit:2,sub:10},55:{unit:2,sub:11},56:{unit:2,sub:12},
  57:{unit:2,sub:13},58:{unit:2,sub:14},59:{unit:2,sub:15},60:{unit:2,sub:16},
  61:{unit:2,sub:17},63:{unit:2,sub:18},64:{unit:2,sub:19},65:{unit:2,sub:20},
  67:{unit:2,sub:21},68:{unit:2,sub:22},69:{unit:2,sub:23},70:{unit:2,sub:24},
  71:{unit:2,sub:25},73:{unit:2,sub:26},74:{unit:2,sub:27},75:{unit:2,sub:28},
  77:{unit:2,sub:29},78:{unit:2,sub:30},79:{unit:2,sub:31},81:{unit:2,sub:32},
  82:{unit:2,sub:33},83:{unit:2,sub:34},84:{unit:3,sub:1},85:{unit:3,sub:2},
  86:{unit:3,sub:3},87:{unit:3,sub:4},88:{unit:3,sub:5},89:{unit:3,sub:6},
  91:{unit:3,sub:7},92:{unit:3,sub:8},93:{unit:3,sub:9},94:{unit:3,sub:10},
  96:{unit:3,sub:11},97:{unit:3,sub:12},98:{unit:3,sub:13},99:{unit:3,sub:14},
  101:{unit:3,sub:15},102:{unit:3,sub:16},103:{unit:3,sub:17},104:{unit:3,sub:18},
  105:{unit:3,sub:19},106:{unit:3,sub:20},108:{unit:3,sub:21},109:{unit:3,sub:22},
  110:{unit:3,sub:23},111:{unit:3,sub:24},112:{unit:3,sub:25},114:{unit:3,sub:26},
  115:{unit:3,sub:27},116:{unit:4,sub:1},117:{unit:4,sub:2},118:{unit:4,sub:3},
  119:{unit:4,sub:4},120:{unit:4,sub:5},121:{unit:4,sub:6},123:{unit:4,sub:7},
  124:{unit:4,sub:8},125:{unit:4,sub:9},126:{unit:4,sub:10},128:{unit:4,sub:11},
  129:{unit:4,sub:12},130:{unit:4,sub:13},131:{unit:4,sub:14},132:{unit:4,sub:15},
  133:{unit:4,sub:16},134:{unit:4,sub:17},135:{unit:4,sub:18},137:{unit:4,sub:19},
  138:{unit:4,sub:20},139:{unit:4,sub:21},140:{unit:4,sub:22},141:{unit:4,sub:23},
  143:{unit:4,sub:24},144:{unit:4,sub:25},145:{unit:5,sub:1},146:{unit:5,sub:2},
  147:{unit:5,sub:3},148:{unit:5,sub:4},149:{unit:5,sub:5},150:{unit:5,sub:6},
  151:{unit:5,sub:7},152:{unit:5,sub:8},153:{unit:5,sub:9},154:{unit:5,sub:10},
  156:{unit:5,sub:11},157:{unit:5,sub:12},158:{unit:5,sub:13},159:{unit:5,sub:14},
  161:{unit:5,sub:15},162:{unit:5,sub:16},163:{unit:5,sub:17},164:{unit:5,sub:18},
  166:{unit:5,sub:19},167:{unit:5,sub:20},168:{unit:6,sub:1},169:{unit:6,sub:2},
  170:{unit:6,sub:3},171:{unit:6,sub:4},172:{unit:6,sub:5},173:{unit:6,sub:6},
  174:{unit:6,sub:7},176:{unit:6,sub:8},177:{unit:6,sub:9},178:{unit:6,sub:10},
  179:{unit:6,sub:11},181:{unit:6,sub:12},182:{unit:6,sub:13},183:{unit:6,sub:14},
  184:{unit:6,sub:15},186:{unit:6,sub:16},187:{unit:6,sub:17},188:{unit:6,sub:18},
  189:{unit:6,sub:19},191:{unit:6,sub:20},192:{unit:6,sub:21},
};

const TB_UNIT_MAX_SUB = {1:36,2:34,3:27,4:25,5:20,6:21};

// タイピング基礎 タイピィ全stage (page, name)
const TB_TAPII_STAGES = {
  1:{page:1,name:"ステージ1"},2:{page:1,name:"ステージ2"},3:{page:1,name:"ステージ3"},
  4:{page:1,name:"ステージ4"},5:{page:1,name:"ステージ5"},6:{page:1,name:"Game"},
  7:{page:1,name:"ステージ6"},8:{page:1,name:"ステージ7"},9:{page:1,name:"ステージ8"},
  10:{page:1,name:"ステージ9"},11:{page:1,name:"ステージ10"},12:{page:1,name:"ステージ11"},
  13:{page:1,name:"Game"},14:{page:1,name:"ステージ12"},15:{page:1,name:"ステージ13"},
  16:{page:1,name:"ステージ14"},17:{page:1,name:"ステージ15"},18:{page:1,name:"ステージ16"},
  19:{page:1,name:"ステージ17"},20:{page:1,name:"Game"},21:{page:1,name:"ステージ18"},
  22:{page:1,name:"ステージ19"},23:{page:2,name:"ステージ1"},24:{page:2,name:"ステージ2"},
  25:{page:2,name:"Game"},26:{page:2,name:"ステージ3"},27:{page:2,name:"ステージ4"},
  28:{page:2,name:"ステージ5"},29:{page:2,name:"ステージ6"},30:{page:2,name:"ステージ7"},
  31:{page:2,name:"ステージ8"},32:{page:2,name:"Game"},33:{page:2,name:"ステージ9"},
  34:{page:2,name:"ステージ10"},35:{page:2,name:"ステージ11"},36:{page:2,name:"ステージ12"},
  37:{page:2,name:"ステージ13"},38:{page:2,name:"ステージ14"},39:{page:2,name:"ステージ15"},
  40:{page:2,name:"Game"},41:{page:2,name:"ステージ16"},42:{page:2,name:"ステージ17"},
  43:{page:2,name:"ステージ18"},44:{page:2,name:"ステージ19"},45:{page:3,name:"ステージ1"},
  46:{page:3,name:"ステージ2"},47:{page:3,name:"ステージ3"},48:{page:3,name:"ステージ4"},
  49:{page:3,name:"Game"},50:{page:3,name:"ステージ5"},51:{page:3,name:"ステージ6"},
  52:{page:3,name:"ステージ7"},53:{page:3,name:"ステージ8"},54:{page:3,name:"Game"},
  55:{page:3,name:"ステージ9"},56:{page:3,name:"ステージ10"},57:{page:3,name:"ステージ11"},
  58:{page:3,name:"ステージ12"},59:{page:3,name:"ステージ13"},60:{page:3,name:"ステージ14"},
  61:{page:3,name:"ステージ15"},62:{page:3,name:"Game"},63:{page:3,name:"ステージ16"},
  64:{page:3,name:"ステージ17"},65:{page:3,name:"ステージ18"},66:{page:3,name:"Game"},
  67:{page:4,name:"ステージ1"},68:{page:4,name:"ステージ2"},69:{page:4,name:"ステージ3"},
  70:{page:4,name:"ステージ4"},71:{page:4,name:"ステージ5"},72:{page:4,name:"Game"},
  73:{page:4,name:"ステージ6"},74:{page:4,name:"ステージ7"},75:{page:4,name:"ステージ8"},
  76:{page:4,name:"Game"},77:{page:4,name:"ステージ9"},78:{page:4,name:"ステージ10"},
  79:{page:4,name:"ステージ11"},80:{page:4,name:"Game"},81:{page:4,name:"ステージ12"},
  82:{page:4,name:"ステージ13"},83:{page:4,name:"ステージ14"},84:{page:4,name:"ステージ15"},
  85:{page:4,name:"ステージ16"},86:{page:4,name:"ステージ17"},87:{page:4,name:"ステージ18"},
  88:{page:4,name:"ステージ19"},89:{page:5,name:"ステージ1"},90:{page:5,name:"Game"},
  91:{page:5,name:"ステージ2"},92:{page:5,name:"ステージ3"},93:{page:5,name:"ステージ4"},
  94:{page:5,name:"ステージ5"},95:{page:5,name:"Game"},96:{page:5,name:"ステージ6"},
  97:{page:5,name:"ステージ7"},98:{page:5,name:"ステージ8"},99:{page:5,name:"ステージ9"},
  100:{page:5,name:"Game"},101:{page:5,name:"ステージ10"},102:{page:5,name:"ステージ11"},
  103:{page:5,name:"ステージ12"},104:{page:5,name:"ステージ13"},105:{page:5,name:"ステージ14"},
  106:{page:5,name:"ステージ15"},107:{page:5,name:"Game"},108:{page:5,name:"ステージ16"},
  109:{page:5,name:"ステージ17"},110:{page:5,name:"ステージ18"},111:{page:6,name:"ステージ1"},
  112:{page:6,name:"ステージ2"},113:{page:6,name:"Game"},114:{page:6,name:"ステージ3"},
  115:{page:6,name:"ステージ4"},116:{page:6,name:"ステージ5"},117:{page:6,name:"ステージ6"},
  118:{page:6,name:"ステージ7"},119:{page:6,name:"ステージ8"},120:{page:6,name:"ステージ9"},
  121:{page:6,name:"ステージ10"},122:{page:6,name:"Game"},123:{page:6,name:"ステージ11"},
  124:{page:6,name:"ステージ12"},125:{page:6,name:"ステージ13"},126:{page:6,name:"ステージ14"},
  127:{page:6,name:"Game"},128:{page:6,name:"ステージ15"},129:{page:6,name:"ステージ16"},
  130:{page:6,name:"ステージ17"},131:{page:6,name:"ステージ18"},132:{page:6,name:"ステージ19"},
  133:{page:7,name:"ステージ1"},134:{page:7,name:"ステージ2"},135:{page:7,name:"ステージ3"},
  136:{page:7,name:"Game"},137:{page:7,name:"ステージ4"},138:{page:7,name:"ステージ5"},
  139:{page:7,name:"ステージ6"},140:{page:7,name:"ステージ7"},141:{page:7,name:"ステージ8"},
  142:{page:7,name:"Game"},143:{page:7,name:"ステージ9"},144:{page:7,name:"ステージ10"},
  145:{page:7,name:"ステージ11"},146:{page:7,name:"ステージ12"},147:{page:7,name:"ステージ13"},
  148:{page:7,name:"ステージ14"},149:{page:7,name:"ステージ15"},150:{page:7,name:"ステージ16"},
  151:{page:7,name:"ステージ17"},152:{page:7,name:"ステージ18"},153:{page:7,name:"ステージ19"},
  154:{page:7,name:"ステージ20"},155:{page:8,name:"Game"},156:{page:8,name:"ステージ1"},
  157:{page:8,name:"ステージ2"},158:{page:8,name:"ステージ3"},159:{page:8,name:"ステージ4"},
  160:{page:8,name:"Game"},161:{page:8,name:"ステージ5"},162:{page:8,name:"ステージ6"},
  163:{page:8,name:"ステージ7"},164:{page:8,name:"ステージ8"},165:{page:8,name:"Game"},
  166:{page:8,name:"ステージ9"},167:{page:8,name:"ステージ10"},168:{page:8,name:"ステージ11"},
  169:{page:8,name:"ステージ12"},170:{page:8,name:"ステージ13"},171:{page:8,name:"ステージ14"},
  172:{page:8,name:"ステージ15"},173:{page:8,name:"ステージ16"},174:{page:8,name:"ステージ17"},
  175:{page:8,name:"Game"},176:{page:8,name:"ステージ18"},177:{page:9,name:"ステージ1"},
  178:{page:9,name:"ステージ2"},179:{page:9,name:"ステージ3"},180:{page:9,name:"Game"},
  181:{page:9,name:"ステージ4"},182:{page:9,name:"ステージ5"},183:{page:9,name:"ステージ6"},
  184:{page:9,name:"ステージ7"},185:{page:9,name:"Game"},186:{page:9,name:"ステージ8"},
  187:{page:9,name:"ステージ9"},188:{page:9,name:"ステージ10"},189:{page:9,name:"ステージ11"},
  190:{page:9,name:"Game"},191:{page:9,name:"ステージ12"},192:{page:9,name:"ステージ13"},
  193:{page:9,name:"Game"},
};

// ============================================================
// 単語王-必修1600 基礎単語 データ
// ============================================================
// 単語王 page_no-cat_no → タイピィ開始ステージ (先頭単語で照合)
const TG_TO_TAPII = {
  "1-1":{page:1,stage:"ステージ1"},"1-2":{page:1,stage:"ステージ3"},
  "1-3":{page:1,stage:"ステージ5"},"1-4":{page:1,stage:"ステージ7"},
  "1-5":{page:1,stage:"ステージ9"},"1-6":{page:1,stage:"ステージ11"},
  "1-7":{page:1,stage:"ステージ13"},"1-8":{page:1,stage:"ステージ15"},
  "1-9":{page:1,stage:"ステージ17"},"1-10":{page:1,stage:"ステージ19"},
  "2-1":{page:2,stage:"ステージ21"},"2-2":{page:2,stage:"ステージ23"},
  "2-3":{page:2,stage:"ステージ25"},"2-4":{page:2,stage:"ステージ27"},
  "2-5":{page:2,stage:"ステージ29"},"2-6":{page:2,stage:"ステージ31"},
  "2-7":{page:2,stage:"ステージ33"},"2-8":{page:2,stage:"ステージ35"},
  "2-9":{page:2,stage:"ステージ37"},"2-10":{page:2,stage:"ステージ39"},
  "3-1":{page:3,stage:"ステージ41"},"3-2":{page:3,stage:"ステージ43"},
  "3-3":{page:3,stage:"ステージ45"},"3-4":{page:3,stage:"ステージ47"},
  "3-5":{page:3,stage:"ステージ49"},"3-6":{page:3,stage:"ステージ51"},
  "3-7":{page:3,stage:"ステージ53"},"3-8":{page:3,stage:"ステージ55"},
  "3-9":{page:3,stage:"ステージ57"},"3-10":{page:3,stage:"ステージ59"},
  "4-1":{page:4,stage:"ステージ61"},"4-2":{page:4,stage:"ステージ63"},
  "4-3":{page:4,stage:"ステージ65"},"4-4":{page:4,stage:"ステージ67"},
  "4-5":{page:4,stage:"ステージ69"},"4-6":{page:4,stage:"ステージ71"},
  "4-7":{page:4,stage:"ステージ73"},"4-8":{page:4,stage:"ステージ75"},
  "4-9":{page:4,stage:"ステージ77"},"4-10":{page:4,stage:"ステージ79"},
};

// タイピィ stage番号 → 単語王カテゴリ (奇数ステージが開始点)
// sid→cat対応（開始ステージのみ登録）
const TG_TAPII_TO_CAT = {
  1:{page_no:1,cat_no:1,cat_name:"1‐10"},3:{page_no:1,cat_no:2,cat_name:"11‐20"},
  5:{page_no:1,cat_no:3,cat_name:"21‐30"},8:{page_no:1,cat_no:4,cat_name:"31‐40"},
  10:{page_no:1,cat_no:5,cat_name:"41‐50"},13:{page_no:1,cat_no:6,cat_name:"51‐60"},
  15:{page_no:1,cat_no:7,cat_name:"61‐70"},17:{page_no:1,cat_no:8,cat_name:"71‐80"},
  20:{page_no:1,cat_no:9,cat_name:"81‐90"},22:{page_no:1,cat_no:10,cat_name:"91‐100"},
  25:{page_no:2,cat_no:1,cat_name:"101‐110"},27:{page_no:2,cat_no:2,cat_name:"111‐120"},
  29:{page_no:2,cat_no:3,cat_name:"121‐130"},32:{page_no:2,cat_no:4,cat_name:"131‐140"},
  34:{page_no:2,cat_no:5,cat_name:"141‐150"},37:{page_no:2,cat_no:6,cat_name:"151‐160"},
  39:{page_no:2,cat_no:7,cat_name:"161‐170"},41:{page_no:2,cat_no:8,cat_name:"171‐180"},
  44:{page_no:2,cat_no:9,cat_name:"181‐190"},46:{page_no:2,cat_no:10,cat_name:"191‐200"},
  49:{page_no:3,cat_no:1,cat_name:"201‐210"},51:{page_no:3,cat_no:2,cat_name:"211‐220"},
  53:{page_no:3,cat_no:3,cat_name:"221‐230"},56:{page_no:3,cat_no:4,cat_name:"231‐240"},
  58:{page_no:3,cat_no:5,cat_name:"241‐250"},61:{page_no:3,cat_no:6,cat_name:"251‐260"},
  63:{page_no:3,cat_no:7,cat_name:"261‐270"},65:{page_no:3,cat_no:8,cat_name:"271‐280"},
  68:{page_no:3,cat_no:9,cat_name:"281‐290"},70:{page_no:3,cat_no:10,cat_name:"291‐300"},
  73:{page_no:4,cat_no:1,cat_name:"301‐310"},75:{page_no:4,cat_no:2,cat_name:"311‐320"},
  77:{page_no:4,cat_no:3,cat_name:"321‐330"},80:{page_no:4,cat_no:4,cat_name:"331‐340"},
  82:{page_no:4,cat_no:5,cat_name:"341‐350"},85:{page_no:4,cat_no:6,cat_name:"351‐360"},
  87:{page_no:4,cat_no:7,cat_name:"361‐370"},89:{page_no:4,cat_no:8,cat_name:"371‐380"},
  92:{page_no:4,cat_no:9,cat_name:"381‐390"},94:{page_no:4,cat_no:10,cat_name:"391‐400"},
};

const TG_PAGE_NAMES = {1:"1-100",2:"101-200",3:"201-300",4:"301-400"};

// ページごとのカテゴリ一覧 {cat_no, label}
const TG_PAGE_CATS = {
  1:[{cat_no:1,label:"1-10"},{cat_no:2,label:"11-20"},{cat_no:3,label:"21-30"},
     {cat_no:4,label:"31-40"},{cat_no:5,label:"41-50"},{cat_no:6,label:"51-60"},
     {cat_no:7,label:"61-70"},{cat_no:8,label:"71-80"},{cat_no:9,label:"81-90"},
     {cat_no:10,label:"91-100"}],
  2:[{cat_no:1,label:"101-110"},{cat_no:2,label:"111-120"},{cat_no:3,label:"121-130"},
     {cat_no:4,label:"131-140"},{cat_no:5,label:"141-150"},{cat_no:6,label:"151-160"},
     {cat_no:7,label:"161-170"},{cat_no:8,label:"171-180"},{cat_no:9,label:"181-190"},
     {cat_no:10,label:"191-200"}],
  3:[{cat_no:1,label:"201-210"},{cat_no:2,label:"211-220"},{cat_no:3,label:"221-230"},
     {cat_no:4,label:"231-240"},{cat_no:5,label:"241-250"},{cat_no:6,label:"251-260"},
     {cat_no:7,label:"261-270"},{cat_no:8,label:"271-280"},{cat_no:9,label:"281-290"},
     {cat_no:10,label:"291-300"}],
  4:[{cat_no:1,label:"301-310"},{cat_no:2,label:"311-320"},{cat_no:3,label:"321-330"},
     {cat_no:4,label:"331-340"},{cat_no:5,label:"341-350"},{cat_no:6,label:"351-360"},
     {cat_no:7,label:"361-370"},{cat_no:8,label:"371-380"},{cat_no:9,label:"381-390"},
     {cat_no:10,label:"391-400"}],
};

// タイピィのページ別ステージ一覧（単語王用、全ステージ表示）
function tgGetPageStages(page) {
  const nums = new Set();
  for (const [key, val] of Object.entries(TG_TO_TAPII)) {
    if (val.page === page) {
      const start = parseInt(val.stage.replace("ステージ",""));
      if (!isNaN(start)) { nums.add(start); nums.add(start+1); }
    }
  }
  return [...nums].sort((a,b)=>a-b);
}

// ============================================================
// 単語王-必修1600 中１単語 データ
// ============================================================
const TG3_TO_TAPII = {
  "1-1":{page:1,stage:"ステージ1"},"1-2":{page:1,stage:"ステージ2"},
  "1-3":{page:1,stage:"ステージ3"},"1-4":{page:1,stage:"ステージ4"},
  "1-5":{page:1,stage:"ステージ6"},"1-6":{page:1,stage:"ステージ7"},
  "1-7":{page:1,stage:"ステージ8"},"1-8":{page:1,stage:"ステージ9"},
  "1-9":{page:1,stage:"ステージ11"},"1-10":{page:1,stage:"ステージ12"},
  "2-1":{page:1,stage:"ステージ13"},"2-2":{page:1,stage:"ステージ14"},
  "2-3":{page:1,stage:"ステージ16"},"2-4":{page:1,stage:"ステージ17"},
  "2-5":{page:2,stage:"ステージ18"},"2-6":{page:2,stage:"ステージ19"},
  "2-7":{page:2,stage:"ステージ21"},"2-8":{page:2,stage:"ステージ22"},
  "2-9":{page:2,stage:"ステージ23"},"2-10":{page:2,stage:"ステージ24"},
  "3-1":{page:2,stage:"ステージ26"},"3-2":{page:2,stage:"ステージ27"},
  "3-3":{page:2,stage:"ステージ28"},"3-4":{page:2,stage:"ステージ29"},
  "3-5":{page:2,stage:"ステージ31"},"3-6":{page:2,stage:"ステージ32"},
  "3-7":{page:2,stage:"ステージ33"},"3-8":{page:2,stage:"ステージ34"},
  "3-9":{page:3,stage:"ステージ36"},"3-10":{page:3,stage:"ステージ37"},
  "4-1":{page:3,stage:"ステージ38"},"4-2":{page:3,stage:"ステージ39"},
  "4-3":{page:3,stage:"ステージ41"},"4-4":{page:3,stage:"ステージ42"},
  "4-5":{page:3,stage:"ステージ43"},"4-6":{page:3,stage:"ステージ44"},
  "4-7":{page:3,stage:"ステージ46"},"4-8":{page:3,stage:"ステージ47"},
  "4-9":{page:3,stage:"ステージ48"},"4-10":{page:3,stage:"ステージ49"},
};
const TG3_PAGE_CATS = {
  1:[{cat_no:1,label:"1-10"},{cat_no:2,label:"11-20"},{cat_no:3,label:"21-30"},
     {cat_no:4,label:"31-40"},{cat_no:5,label:"41-50"},{cat_no:6,label:"51-60"},
     {cat_no:7,label:"61-70"},{cat_no:8,label:"71-80"},{cat_no:9,label:"81-90"},
     {cat_no:10,label:"91-100"}],
  2:[{cat_no:1,label:"101-110"},{cat_no:2,label:"111-120"},{cat_no:3,label:"121-130"},
     {cat_no:4,label:"131-140"},{cat_no:5,label:"141-150"},{cat_no:6,label:"151-160"},
     {cat_no:7,label:"161-170"},{cat_no:8,label:"171-180"},{cat_no:9,label:"181-190"},
     {cat_no:10,label:"191-200"}],
  3:[{cat_no:1,label:"201-210"},{cat_no:2,label:"211-220"},{cat_no:3,label:"221-230"},
     {cat_no:4,label:"231-240"},{cat_no:5,label:"241-250"},{cat_no:6,label:"251-260"},
     {cat_no:7,label:"261-270"},{cat_no:8,label:"271-280"},{cat_no:9,label:"281-290"},
     {cat_no:10,label:"291-300"}],
  4:[{cat_no:1,label:"301-310"},{cat_no:2,label:"311-320"},{cat_no:3,label:"321-330"},
     {cat_no:4,label:"331-340"},{cat_no:5,label:"341-350"},{cat_no:6,label:"351-360"},
     {cat_no:7,label:"361-370"},{cat_no:8,label:"371-380"},{cat_no:9,label:"381-390"},
     {cat_no:10,label:"391-400"}],
};
function tg3GetPageStages(page) {
  const nums = new Set();
  for (const [key, val] of Object.entries(TG3_TO_TAPII)) {
    if (val.page === page) {
      const start = parseInt(val.stage.replace("ステージ",""));
      if (!isNaN(start)) { nums.add(start); nums.add(start+1); }
    }
  }
  return [...nums].sort((a,b)=>a-b);
}

// タイピング基礎用ヘルパー
function tbGetPageStages(page) {
  const nums = new Set();
  for (const info of Object.values(TB_TAPII_STAGES)) {
    if (info.page === page && info.name !== "Game") {
      const n = parseInt(info.name.replace("ステージ",""));
      if (!isNaN(n)) nums.add(n);
    }
  }
  return [...nums].sort((a,b)=>a-b);
}
function tbGetStageId(page, stageNum) {
  for (const [sid, info] of Object.entries(TB_TAPII_STAGES)) {
    if (info.page === page && info.name === `ステージ${stageNum}`) return parseInt(sid);
  }
  return null;
}

// ============================================================
// 単語王-必修1600 中２単語 データ
// ============================================================
const TG5_TO_TAPII = {
  "1-1":{page:1,stage:"ステージ1"},"1-2":{page:1,stage:"ステージ2"},
  "1-3":{page:1,stage:"ステージ3"},"1-4":{page:1,stage:"ステージ4"},
  "1-5":{page:1,stage:"ステージ5"},"1-6":{page:1,stage:"ステージ6"},
  "1-7":{page:1,stage:"ステージ7"},"1-8":{page:1,stage:"ステージ8"},
  "1-9":{page:1,stage:"ステージ9"},"1-10":{page:1,stage:"ステージ10"},
  "2-1":{page:1,stage:"ステージ11"},"2-2":{page:1,stage:"ステージ12"},
  "2-3":{page:1,stage:"ステージ13"},"2-4":{page:1,stage:"ステージ14"},
  "2-5":{page:1,stage:"ステージ15"},"2-6":{page:1,stage:"ステージ16"},
  "2-7":{page:1,stage:"ステージ17"},"2-8":{page:1,stage:"ステージ18"},
  "2-9":{page:1,stage:"ステージ19"},"2-10":{page:1,stage:"ステージ20"},
  "3-1":{page:2,stage:"ステージ21"},"3-2":{page:2,stage:"ステージ22"},
  "3-3":{page:2,stage:"ステージ23"},"3-4":{page:2,stage:"ステージ24"},
  "3-5":{page:2,stage:"ステージ25"},"3-6":{page:2,stage:"ステージ26"},
  "3-7":{page:2,stage:"ステージ27"},"3-8":{page:2,stage:"ステージ28"},
  "3-9":{page:2,stage:"ステージ29"},"3-10":{page:2,stage:"ステージ30"},
  "4-1":{page:2,stage:"ステージ31"},"4-2":{page:2,stage:"ステージ32"},
  "4-3":{page:2,stage:"ステージ33"},"4-4":{page:2,stage:"ステージ34"},
  "4-5":{page:2,stage:"ステージ35"},"4-6":{page:2,stage:"ステージ36"},
  "4-7":{page:2,stage:"ステージ37"},"4-8":{page:2,stage:"ステージ38"},
  "4-9":{page:2,stage:"ステージ39"},"4-10":{page:2,stage:"ステージ40"},
};
const TG5_PAGE_CATS = {
  1:[{cat_no:1,label:"1-10"},{cat_no:2,label:"11-20"},{cat_no:3,label:"21-30"},
     {cat_no:4,label:"31-40"},{cat_no:5,label:"41-50"},{cat_no:6,label:"51-60"},
     {cat_no:7,label:"61-70"},{cat_no:8,label:"71-80"},{cat_no:9,label:"81-90"},
     {cat_no:10,label:"91-100"}],
  2:[{cat_no:1,label:"101-110"},{cat_no:2,label:"111-120"},{cat_no:3,label:"121-130"},
     {cat_no:4,label:"131-140"},{cat_no:5,label:"141-150"},{cat_no:6,label:"151-160"},
     {cat_no:7,label:"161-170"},{cat_no:8,label:"171-180"},{cat_no:9,label:"181-190"},
     {cat_no:10,label:"191-200"}],
  3:[{cat_no:1,label:"201-210"},{cat_no:2,label:"211-220"},{cat_no:3,label:"221-230"},
     {cat_no:4,label:"231-240"},{cat_no:5,label:"241-250"},{cat_no:6,label:"251-260"},
     {cat_no:7,label:"261-270"},{cat_no:8,label:"271-280"},{cat_no:9,label:"281-290"},
     {cat_no:10,label:"291-300"}],
  4:[{cat_no:1,label:"301-310"},{cat_no:2,label:"311-320"},{cat_no:3,label:"321-330"},
     {cat_no:4,label:"331-340"},{cat_no:5,label:"341-350"},{cat_no:6,label:"351-360"},
     {cat_no:7,label:"361-370"},{cat_no:8,label:"371-380"},{cat_no:9,label:"381-390"},
     {cat_no:10,label:"391-400"}],
};
function tg5GetPageStages(page) {
  const nums = new Set();
  for (const [key, val] of Object.entries(TG5_TO_TAPII)) {
    if (val.page === page) {
      const start = parseInt(val.stage.replace("ステージ",""));
      if (!isNaN(start)) nums.add(start);
    }
  }
  return [...nums].sort((a,b)=>a-b);
}
// ============================================================
// 単語王-必修1600 中３単語 データ
// ============================================================
const TG7_TO_TAPII = {
  "1-1":{page:1,stage:"ステージ1"},"1-2":{page:1,stage:"ステージ2"},
  "1-3":{page:1,stage:"ステージ3"},"1-4":{page:1,stage:"ステージ4"},
  "1-5":{page:1,stage:"ステージ5"},"1-6":{page:1,stage:"ステージ6"},
  "1-7":{page:1,stage:"ステージ7"},"1-8":{page:1,stage:"ステージ8"},
  "1-9":{page:1,stage:"ステージ9"},"1-10":{page:1,stage:"ステージ10"},
  "2-1":{page:1,stage:"ステージ11"},"2-2":{page:1,stage:"ステージ12"},
  "2-3":{page:1,stage:"ステージ13"},"2-4":{page:1,stage:"ステージ14"},
  "2-5":{page:1,stage:"ステージ15"},"2-6":{page:1,stage:"ステージ16"},
  "2-7":{page:1,stage:"ステージ17"},"2-8":{page:1,stage:"ステージ18"},
  "2-9":{page:1,stage:"ステージ19"},"2-10":{page:1,stage:"ステージ20"},
  "3-1":{page:2,stage:"ステージ21"},"3-2":{page:2,stage:"ステージ22"},
  "3-3":{page:2,stage:"ステージ23"},"3-4":{page:2,stage:"ステージ24"},
  "3-5":{page:2,stage:"ステージ25"},"3-6":{page:2,stage:"ステージ26"},
  "3-7":{page:2,stage:"ステージ27"},"3-8":{page:2,stage:"ステージ28"},
  "3-9":{page:2,stage:"ステージ29"},"3-10":{page:2,stage:"ステージ30"},
  "4-1":{page:2,stage:"ステージ31"},"4-2":{page:2,stage:"ステージ32"},
  "4-3":{page:2,stage:"ステージ33"},"4-4":{page:2,stage:"ステージ34"},
  "4-5":{page:2,stage:"ステージ35"},"4-6":{page:2,stage:"ステージ36"},
  "4-7":{page:2,stage:"ステージ37"},"4-8":{page:2,stage:"ステージ38"},
  "4-9":{page:2,stage:"ステージ39"},"4-10":{page:2,stage:"ステージ40"},
};
const TG7_PAGE_CATS = {
  1:[{cat_no:1,label:"1-10"},{cat_no:2,label:"11-20"},{cat_no:3,label:"21-30"},
     {cat_no:4,label:"31-40"},{cat_no:5,label:"41-50"},{cat_no:6,label:"51-60"},
     {cat_no:7,label:"61-70"},{cat_no:8,label:"71-80"},{cat_no:9,label:"81-90"},
     {cat_no:10,label:"91-100"}],
  2:[{cat_no:1,label:"101-110"},{cat_no:2,label:"111-120"},{cat_no:3,label:"121-130"},
     {cat_no:4,label:"131-140"},{cat_no:5,label:"141-150"},{cat_no:6,label:"151-160"},
     {cat_no:7,label:"161-170"},{cat_no:8,label:"171-180"},{cat_no:9,label:"181-190"},
     {cat_no:10,label:"191-200"}],
  3:[{cat_no:1,label:"201-210"},{cat_no:2,label:"211-220"},{cat_no:3,label:"221-230"},
     {cat_no:4,label:"231-240"},{cat_no:5,label:"241-250"},{cat_no:6,label:"251-260"},
     {cat_no:7,label:"261-270"},{cat_no:8,label:"271-280"},{cat_no:9,label:"281-290"},
     {cat_no:10,label:"291-300"}],
  4:[{cat_no:1,label:"301-310"},{cat_no:2,label:"311-320"},{cat_no:3,label:"321-330"},
     {cat_no:4,label:"331-340"},{cat_no:5,label:"341-350"},{cat_no:6,label:"351-360"},
     {cat_no:7,label:"361-370"},{cat_no:8,label:"371-380"},{cat_no:9,label:"381-390"},
     {cat_no:10,label:"391-400"}],
};
function tg7GetPageStages(page) {
  const nums = new Set();
  for (const [key, val] of Object.entries(TG7_TO_TAPII)) {
    if (val.page === page) {
      const start = parseInt(val.stage.replace("ステージ",""));
      if (!isNaN(start)) nums.add(start);
    }
  }
  return [...nums].sort((a,b)=>a-b);
}

// ============================================================
// メインコンポーネント
// ============================================================
export default function Converter() {
  const [section, setSection] = useState("typing"); // "typing" | "tango" | "tango3" | "tango5" | "tango7"
  const [mode, setMode] = useState("eigo_to_tapii");

  // タイピング基礎
  const [tbUnit, setTbUnit] = useState(1);
  const [tbSub, setTbSub] = useState(1);
  const [tbPage, setTbPage] = useState(1);
  const [tbStage, setTbStage] = useState(1);

  // 単語王 基礎単語
  const [tgPage, setTgPage] = useState(1);
  const [tgCat, setTgCat] = useState(1);
  const [tgTapiiPage, setTgTapiiPage] = useState(1);
  const [tgTapiiStage, setTgTapiiStage] = useState(1);

  // 単語王 中１単語
  const [tg3Page, setTg3Page] = useState(1);
  const [tg3Cat, setTg3Cat] = useState(1);
  const [tg3TapiiPage, setTg3TapiiPage] = useState(1);
  const [tg3TapiiStage, setTg3TapiiStage] = useState(1);

  // 単語王 中２単語
  const [tg5Page, setTg5Page] = useState(1);
  const [tg5Cat, setTg5Cat] = useState(1);
  const [tg5TapiiPage, setTg5TapiiPage] = useState(1);
  const [tg5TapiiStage, setTg5TapiiStage] = useState(1);

  // 単語王 中３単語
  const [tg7Page, setTg7Page] = useState(1);
  const [tg7Cat, setTg7Cat] = useState(1);
  const [tg7TapiiPage, setTg7TapiiPage] = useState(1);
  const [tg7TapiiStage, setTg7TapiiStage] = useState(1);

  const [result, setResult] = useState(null);

  const tbMaxSub = TB_UNIT_MAX_SUB[tbUnit] || 36;
  const tbPageStages = useMemo(() => tbGetPageStages(tbPage), [tbPage]);
  const tgTapiiStages = useMemo(() => tgGetPageStages(tgTapiiPage), [tgTapiiPage]);
  const tg3TapiiStages = useMemo(() => tg3GetPageStages(tg3TapiiPage), [tg3TapiiPage]);
  const tg5Stages = useMemo(() => tg5GetPageStages(tg5TapiiPage), [tg5TapiiPage]);
  const tg7Stages = useMemo(() => tg7GetPageStages(tg7TapiiPage), [tg7TapiiPage]);

  const handleSectionChange = (s) => { setSection(s); setResult(null); };
  const handleModeChange = (m) => { setMode(m); setResult(null); };

  const handleConvert = () => {
    if (section === "typing") {
      if (mode === "eigo_to_tapii") {
        const r = TB_EIGO_TO_TAPII[`${tbUnit}-${tbSub}`];
        setResult({ type:"tb_eigo_to_tapii", unit:tbUnit, sub:tbSub, data:r||null });
      } else {
        const sid = tbGetStageId(tbPage, tbStage);
        const r = sid ? TB_TAPII_TO_EIGO[sid] : null;
        setResult({ type:"tb_tapii_to_eigo", page:tbPage, stage:tbStage, data:r||null });
      }
    } else if (section === "tango") {
      if (mode === "eigo_to_tapii") {
        const r = TG_TO_TAPII[`${tgPage}-${tgCat}`];
        setResult({ type:"tg_to_tapii", page_no:tgPage, cat_no:tgCat, data:r||null });
      } else {
        const stageNum = tgTapiiStage;
        let found = null;
        for (const [key, val] of Object.entries(TG_TO_TAPII)) {
          if (val.page === tgTapiiPage && val.stage === `ステージ${stageNum}`) {
            const [pno, cno] = key.split("-").map(Number);
            found = { page_no: pno, cat_no: cno };
            break;
          }
        }
        if (!found) {
          const pageStagesInCat = Object.entries(TG_TO_TAPII)
            .filter(([,v]) => v.page === tgTapiiPage)
            .map(([k,v]) => ({ key:k, startNum: parseInt(v.stage.replace("ステージ","")) }))
            .sort((a,b) => a.startNum - b.startNum);
          for (let i = pageStagesInCat.length-1; i >= 0; i--) {
            if (pageStagesInCat[i].startNum <= stageNum) {
              const [pno, cno] = pageStagesInCat[i].key.split("-").map(Number);
              found = { page_no: pno, cat_no: cno };
              break;
            }
          }
        }
        setResult({ type:"tg_tapii_to_cat", tapii_page:tgTapiiPage, tapii_stage:tgTapiiStage, data:found });
      }
    } else if (section === "tango3") {
      if (mode === "eigo_to_tapii") {
        const r = TG3_TO_TAPII[`${tg3Page}-${tg3Cat}`];
        setResult({ type:"tg3_to_tapii", page_no:tg3Page, cat_no:tg3Cat, data:r||null });
      } else {
        const stageNum = tg3TapiiStage;
        let found = null;
        const pageStagesInCat = Object.entries(TG3_TO_TAPII)
          .filter(([,v]) => v.page === tg3TapiiPage)
          .map(([k,v]) => ({ key:k, startNum: parseInt(v.stage.replace("ステージ","")) }))
          .sort((a,b) => a.startNum - b.startNum);
        for (let i = pageStagesInCat.length-1; i >= 0; i--) {
          if (pageStagesInCat[i].startNum <= stageNum) {
            const [pno, cno] = pageStagesInCat[i].key.split("-").map(Number);
            found = { page_no: pno, cat_no: cno };
            break;
          }
        }
        setResult({ type:"tg3_tapii_to_cat", tapii_page:tg3TapiiPage, tapii_stage:tg3TapiiStage, data:found });
      }
    } else if (section === "tango5") {
      if (mode === "eigo_to_tapii") {
        const r = TG5_TO_TAPII[`${tg5Page}-${tg5Cat}`];
        setResult({ type:"tg5_to_tapii", page_no:tg5Page, cat_no:tg5Cat, data:r||null });
      } else {
        const stageNum = tg5TapiiStage;
        let found = null;
        const entries = Object.entries(TG5_TO_TAPII)
          .filter(([,v]) => v.page === tg5TapiiPage)
          .map(([k,v]) => ({ key:k, startNum: parseInt(v.stage.replace("ステージ","")) }))
          .sort((a,b) => a.startNum - b.startNum);
        for (let i = entries.length-1; i >= 0; i--) {
          if (entries[i].startNum <= stageNum) {
            const [pno, cno] = entries[i].key.split("-").map(Number);
            found = { page_no: pno, cat_no: cno };
            break;
          }
        }
        setResult({ type:"tg5_tapii_to_cat", tapii_page:tg5TapiiPage, tapii_stage:tg5TapiiStage, data:found });
      }
    } else if (section === "tango7") {
      if (mode === "eigo_to_tapii") {
        const r = TG7_TO_TAPII[`${tg7Page}-${tg7Cat}`];
        setResult({ type:"tg7_to_tapii", page_no:tg7Page, cat_no:tg7Cat, data:r||null });
      } else {
        const stageNum = tg7TapiiStage;
        let found = null;
        const entries = Object.entries(TG7_TO_TAPII)
          .filter(([,v]) => v.page === tg7TapiiPage)
          .map(([k,v]) => ({ key:k, startNum: parseInt(v.stage.replace("ステージ","")) }))
          .sort((a,b) => a.startNum - b.startNum);
        for (let i = entries.length-1; i >= 0; i--) {
          if (entries[i].startNum <= stageNum) {
            const [pno, cno] = entries[i].key.split("-").map(Number);
            found = { page_no: pno, cat_no: cno };
            break;
          }
        }
        setResult({ type:"tg7_tapii_to_cat", tapii_page:tg7TapiiPage, tapii_stage:tg7TapiiStage, data:found });
      }
    }
  };

  const s = { border:"none", cursor:"pointer", fontFamily:"inherit" };

  return (
    <div style={{ minHeight:"100vh", background:"#f0f9ff", fontFamily:"'Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif", display:"flex", flexDirection:"column", alignItems:"center", padding:"16px 16px" }}>

      {/* ヘッダー */}
      <div style={{ textAlign:"center", marginBottom:12 }}>
        <h1 style={{ fontSize:26, fontWeight:800, margin:0, color:"#0284c7", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>ユニット対応表ツール</h1>
        <div style={{ fontSize:13, color:"#0369a1", marginTop:4 }}>英語王 / 単語王 ↔ タイピィの冒険</div>
      </div>

      <div style={{ background:"#ffffff", border:"1px solid #bae6fd", borderRadius:20, padding:"16px", width:"100%", maxWidth:540, boxShadow:"0 8px 32px rgba(14,165,233,0.15)" }}>

        {/* セクション切替 */}
        <div style={{ display:"flex", background:"#e0f2fe", borderRadius:12, padding:3, marginBottom:12, gap:3 }}>
          {[{key:"typing",label:"⌨️ タイピング基礎"},{key:"tango",label:"📚 基礎単語"},{key:"tango3",label:"📗 中１単語"},{key:"tango5",label:"📘 中２単語"},{key:"tango7",label:"📙 中３単語"}].map(sec=>(
            <button key={sec.key} onClick={()=>handleSectionChange(sec.key)} style={{ ...s, flex:1, padding:"9px 4px", borderRadius:9, fontSize:12, fontWeight:700, background:section===sec.key?"linear-gradient(135deg,#0ea5e9,#6366f1)":"transparent", color:section===sec.key?"#fff":"#0369a1", boxShadow:section===sec.key?"0 4px 12px rgba(14,165,233,0.3)":"none" }}>{sec.label}</button>
          ))}
        </div>

        {/* 単語王サブラベル */}
        {section==="tango" && (
          <div style={{ fontSize:12, color:"#0284c7", fontWeight:700, marginBottom:12, paddingLeft:4 }}>基礎単語</div>
        )}

        {/* 方向切替 */}
        <div style={{ display:"flex", background:"#e0f2fe", borderRadius:12, padding:3, marginBottom:12, gap:3 }}>
          {[
            {key:"eigo_to_tapii",label:section==="typing"?"英語王 → タイピィ":"単語王 → タイピィ",icon:"👑"},
            {key:"tapii_to_eigo",label:section==="typing"?"タイピィ → 英語王":"タイピィ → 単語王",icon:"🗺️"}
          ].map(m=>(
            <button key={m.key} onClick={()=>handleModeChange(m.key)} style={{ ...s, flex:1, padding:"9px 6px", borderRadius:9, fontSize:12, fontWeight:700, background:mode===m.key?"linear-gradient(135deg,#3b82f6,#6366f1)":"transparent", color:mode===m.key?"#fff":"#0369a1", boxShadow:mode===m.key?"0 4px 12px rgba(99,102,241,0.4)":"none" }}>{m.icon} {m.label}</button>
          ))}
        </div>

        {/* 入力エリア */}
        {section==="typing" && mode==="eigo_to_tapii" && (
          <div>
            <Label>英語王 Unit番号</Label>
            <SegmentControl options={[1,2,3,4,5,6].map(u=>({value:u,label:`Unit ${u}`}))} value={tbUnit} onChange={v=>{setTbUnit(v);setTbSub(1);setResult(null);}} />
            <div style={{height:10}}/>
            <Label>Sub-Unit番号（1〜{tbMaxSub}）</Label>
            <NumberSlider value={tbSub} min={1} max={tbMaxSub} onChange={v=>{setTbSub(v);setResult(null);}} />
          </div>
        )}
        {section==="typing" && mode==="tapii_to_eigo" && (
          <div>
            <Label>タイピィ ページ番号</Label>
            <SegmentControl options={Array.from({length:9},(_,i)=>({value:i+1,label:`P${i+1}`}))} value={tbPage} onChange={v=>{setTbPage(v);setTbStage(tbGetPageStages(v)[0]||1);setResult(null);}} />
            <div style={{height:10}}/>
            <Label>ステージ番号</Label>
            <SegmentControl options={tbPageStages.map(s=>({value:s,label:`${s}`}))} value={tbStage} onChange={v=>{setTbStage(v);setResult(null);}} />
          </div>
        )}
        {section==="tango" && mode==="eigo_to_tapii" && (
          <div>
            <Label>単語王 ページ（単語番号範囲）</Label>
            <SegmentControl options={[1,2,3,4].map(p=>({value:p,label:TG_PAGE_NAMES[p]}))} value={tgPage} onChange={v=>{setTgPage(v);setTgCat(1);setResult(null);}} />
            <div style={{height:10}}/>
            <Label>カテゴリ</Label>
            <SegmentControl options={TG_PAGE_CATS[tgPage].map(c=>({value:c.cat_no,label:c.label}))} value={tgCat} onChange={v=>{setTgCat(v);setResult(null);}} />
          </div>
        )}
        {section==="tango3" && mode==="eigo_to_tapii" && (
          <div>
            <Label>単語王 ページ（単語番号範囲）</Label>
            <SegmentControl options={[1,2,3,4].map(p=>({value:p,label:TG_PAGE_NAMES[p]}))} value={tg3Page} onChange={v=>{setTg3Page(v);setTg3Cat(1);setResult(null);}} />
            <div style={{height:10}}/>
            <Label>カテゴリ</Label>
            <SegmentControl options={TG3_PAGE_CATS[tg3Page].map(c=>({value:c.cat_no,label:c.label}))} value={tg3Cat} onChange={v=>{setTg3Cat(v);setResult(null);}} />
          </div>
        )}
        {section==="tango3" && mode==="tapii_to_eigo" && (
          <div>
            <Label>タイピィ ページ番号</Label>
            <SegmentControl options={[1,2,3].map(p=>({value:p,label:`P${p}`}))} value={tg3TapiiPage} onChange={v=>{setTg3TapiiPage(v);setTg3TapiiStage(tg3GetPageStages(v)[0]||1);setResult(null);}} />
            <div style={{height:10}}/>
            <Label>ステージ番号</Label>
            <SegmentControl options={tg3TapiiStages.map(s=>({value:s,label:`${s}`}))} value={tg3TapiiStage} onChange={v=>{setTg3TapiiStage(v);setResult(null);}} />
          </div>
        )}
        {section==="tango" && mode==="tapii_to_eigo" && (
          <div>
            <Label>タイピィ ページ番号</Label>
            <SegmentControl options={[1,2,3,4].map(p=>({value:p,label:`P${p}`}))} value={tgTapiiPage} onChange={v=>{setTgTapiiPage(v);setTgTapiiStage(tgGetPageStages(v)[0]||1);setResult(null);}} />
            <div style={{height:10}}/>
            <Label>ステージ番号</Label>
            <SegmentControl options={tgTapiiStages.map(s=>({value:s,label:`${s}`}))} value={tgTapiiStage} onChange={v=>{setTgTapiiStage(v);setResult(null);}} />
          </div>
        )}

        {section==="tango5" && mode==="eigo_to_tapii" && (
          <div>
            <Label>単語王 ページ（単語番号範囲）</Label>
            <SegmentControl options={[1,2,3,4].map(p=>({value:p,label:TG_PAGE_NAMES[p]}))} value={tg5Page} onChange={v=>{setTg5Page(v);setTg5Cat(1);setResult(null);}} />
            <div style={{height:10}}/>
            <Label>カテゴリ</Label>
            <SegmentControl options={TG5_PAGE_CATS[tg5Page].map(c=>({value:c.cat_no,label:c.label}))} value={tg5Cat} onChange={v=>{setTg5Cat(v);setResult(null);}} />
          </div>
        )}
        {section==="tango5" && mode==="tapii_to_eigo" && (
          <div>
            <Label>タイピィ ページ番号</Label>
            <SegmentControl options={[1,2].map(p=>({value:p,label:`P${p}`}))} value={tg5TapiiPage} onChange={v=>{setTg5TapiiPage(v);setTg5TapiiStage(tg5GetPageStages(v)[0]||1);setResult(null);}} />
            <div style={{height:10}}/>
            <Label>ステージ番号</Label>
            <SegmentControl options={tg5Stages.map(s=>({value:s,label:`${s}`}))} value={tg5TapiiStage} onChange={v=>{setTg5TapiiStage(v);setResult(null);}} />
          </div>
        )}

        {section==="tango7" && mode==="eigo_to_tapii" && (
          <div>
            <Label>単語王 ページ（単語番号範囲）</Label>
            <SegmentControl options={[1,2,3,4].map(p=>({value:p,label:TG_PAGE_NAMES[p]}))} value={tg7Page} onChange={v=>{setTg7Page(v);setTg7Cat(1);setResult(null);}} />
            <div style={{height:10}}/>
            <Label>カテゴリ</Label>
            <SegmentControl options={TG7_PAGE_CATS[tg7Page].map(c=>({value:c.cat_no,label:c.label}))} value={tg7Cat} onChange={v=>{setTg7Cat(v);setResult(null);}} />
          </div>
        )}
        {section==="tango7" && mode==="tapii_to_eigo" && (
          <div>
            <Label>タイピィ ページ番号</Label>
            <SegmentControl options={[1,2].map(p=>({value:p,label:`P${p}`}))} value={tg7TapiiPage} onChange={v=>{setTg7TapiiPage(v);setTg7TapiiStage(tg7GetPageStages(v)[0]||1);setResult(null);}} />
            <div style={{height:10}}/>
            <Label>ステージ番号</Label>
            <SegmentControl options={tg7Stages.map(s=>({value:s,label:`${s}`}))} value={tg7TapiiStage} onChange={v=>{setTg7TapiiStage(v);setResult(null);}} />
          </div>
        )}

        <button onClick={handleConvert} style={{ ...s, width:"100%", marginTop:12, padding:"11px", background:"#fbbf24", borderRadius:12, color:"#78350f", fontSize:15, fontWeight:800, letterSpacing:1, boxShadow:"0 4px 20px rgba(251,191,36,0.35)" }}>
          対応するステージを調べる →
        </button>

        {result && <ResultBox result={result} tgPageNames={TG_PAGE_NAMES} tgPageCats={TG_PAGE_CATS} />}
      </div>

      <div style={{ fontSize:11, color:"#0369a1", marginTop:8, textAlign:"center" }}>
        ※ movie_url・question_body・answer照合（前後一致）で生成した対応表です
      </div>
    </div>
  );
}

function Label({children}) {
  return <div style={{fontSize:12,fontWeight:700,color:"#0284c7",marginBottom:8,letterSpacing:0.5}}>{children}</div>;
}
function SegmentControl({options,value,onChange}) {
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
      {options.map(opt=>(
        <button key={opt.value} onClick={()=>onChange(opt.value)} style={{ padding:"7px 12px", borderRadius:8, border:"1.5px solid", borderColor:value===opt.value?"#0ea5e9":"#bae6fd", background:value===opt.value?"rgba(14,165,233,0.15)":"transparent", color:value===opt.value?"#0284c7":"#0369a1", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>{opt.label}</button>
      ))}
    </div>
  );
}
function NumberSlider({value,min,max,onChange}) {
  const btn={width:36,height:36,borderRadius:8,border:"1.5px solid #bae6fd",background:"#e0f2fe",color:"#0284c7",fontSize:18,cursor:"pointer",fontFamily:"inherit"};
  return (
    <div style={{display:"flex",alignItems:"center",gap:12}}>
      <button onClick={()=>onChange(Math.max(min,value-1))} style={btn}>−</button>
      <div style={{flex:1,textAlign:"center",fontSize:28,fontWeight:800,color:"#0c4a6e",background:"#e0f2fe",borderRadius:10,padding:"8px 0",border:"1.5px solid #bae6fd"}}>{value}</div>
      <button onClick={()=>onChange(Math.min(max,value+1))} style={btn}>＋</button>
    </div>
  );
}

function ResultBox({result, tgPageNames, tgPageCats}) {
  const card={marginTop:18,background:"linear-gradient(135deg,rgba(14,165,233,0.06),rgba(251,191,36,0.06))",border:"1px solid #bae6fd",borderRadius:14,padding:"18px"};
  const lbl={fontSize:12,color:"#0284c7",marginBottom:8,fontWeight:700};
  const sub={fontSize:13,color:"#0369a1",marginBottom:10};
  const chip=(label,color="#6366f1")=>(
    <div style={{display:"inline-block",background:`linear-gradient(135deg,${color},${color}99)`,borderRadius:7,padding:"4px 10px",fontSize:12,fontWeight:800,color:"#fff",marginRight:8}}>{label}</div>
  );

  if (result.type==="tb_eigo_to_tapii") {
    return (
      <div style={card}>
        <div style={lbl}>変換結果 — タイピング基礎</div>
        <div style={{fontSize:16,fontWeight:800,color:"#0284c7",marginBottom:10}}>👑 英語王 Unit{result.unit} - {result.sub}</div>
        <div style={sub}>▼ タイピィの冒険では</div>
        {result.data ? (
          <div style={{display:"flex",alignItems:"center",gap:10,background:"#e0f2fe",borderRadius:10,padding:"12px 14px"}}>
            {chip(`ページ ${result.data.page}`)}
            <div style={{fontSize:18,fontWeight:800,color:"#0284c7"}}>{result.data.stage}</div>
          </div>
        ) : <div style={{color:"#ef4444"}}>対応するステージが見つかりませんでした</div>}
      </div>
    );
  }
  if (result.type==="tb_tapii_to_eigo") {
    return (
      <div style={card}>
        <div style={lbl}>変換結果 — タイピング基礎</div>
        <div style={{fontSize:16,fontWeight:800,color:"#0369a1",marginBottom:10}}>🗺️ タイピィ ページ{result.page} - ステージ{result.stage}</div>
        <div style={sub}>▼ 英語王では</div>
        {result.data ? (
          <div style={{display:"flex",alignItems:"center",gap:10,background:"#e0f2fe",borderRadius:10,padding:"12px 14px"}}>
            <span style={{fontSize:20}}>👑</span>
            <div style={{fontSize:20,fontWeight:800,color:"#0284c7"}}>Unit {result.data.unit} - {result.data.sub}</div>
          </div>
        ) : <div style={{color:"#ef4444"}}>対応するユニットが見つかりませんでした</div>}
      </div>
    );
  }
  if (result.type==="tg_to_tapii") {
    const pageName = tgPageNames[result.page_no];
    const catLabel = TG_PAGE_CATS[result.page_no]?.find(c=>c.cat_no===result.cat_no)?.label || `カテゴリ${result.cat_no}`;
    return (
      <div style={card}>
        <div style={lbl}>変換結果 — 単語王 基礎単語</div>
        <div style={{fontSize:16,fontWeight:800,color:"#0284c7",marginBottom:10}}>📚 単語王 {pageName} / {catLabel}</div>
        <div style={sub}>▼ タイピィの冒険では（開始ステージ）</div>
        {result.data ? (
          <div style={{display:"flex",alignItems:"center",gap:10,background:"#e0f2fe",borderRadius:10,padding:"12px 14px"}}>
            {chip(`ページ ${result.data.page}`,"#0ea5e9")}
            <div style={{fontSize:16,fontWeight:800,color:"#0284c7"}}>
              {result.data.stage} または {result.data.stage.replace(/\d+/, n => parseInt(n)+1)}
            </div>
          </div>
        ) : <div style={{color:"#ef4444"}}>対応するステージが見つかりませんでした</div>}
      </div>
    );
  }
  if (result.type==="tg_tapii_to_cat") {
    const catLabel = tgPageCats[result.data?.page_no]?.find(c=>c.cat_no===result.data?.cat_no)?.label;
    return (
      <div style={card}>
        <div style={lbl}>変換結果 — 単語王 基礎単語</div>
        <div style={{fontSize:16,fontWeight:800,color:"#0369a1",marginBottom:10}}>🗺️ タイピィ ページ{result.tapii_page} - ステージ{result.tapii_stage}</div>
        <div style={sub}>▼ 単語王では</div>
        {result.data ? (
          <div style={{display:"flex",alignItems:"center",gap:10,background:"#e0f2fe",borderRadius:10,padding:"12px 14px"}}>
            <span style={{fontSize:20}}>📚</span>
            <div style={{fontSize:18,fontWeight:800,color:"#0284c7"}}>{tgPageNames[result.data.page_no]} / {catLabel}</div>
          </div>
        ) : <div style={{color:"#ef4444"}}>対応するカテゴリが見つかりませんでした</div>}
      </div>
    );
  }
  if (result.type==="tg3_to_tapii") {
    const pageName = tgPageNames[result.page_no];
    const catLabel = TG3_PAGE_CATS[result.page_no]?.find(c=>c.cat_no===result.cat_no)?.label || `カテゴリ${result.cat_no}`;
    return (
      <div style={card}>
        <div style={lbl}>変換結果 — 単語王 中１単語</div>
        <div style={{fontSize:16,fontWeight:800,color:"#0284c7",marginBottom:10}}>📗 単語王 {pageName} / {catLabel}</div>
        <div style={sub}>▼ タイピィの冒険では（開始ステージ）</div>
        {result.data ? (
          <div style={{display:"flex",alignItems:"center",gap:10,background:"#e0f2fe",borderRadius:10,padding:"12px 14px"}}>
            {chip(`ページ ${result.data.page}`,"#0ea5e9")}
            <div style={{fontSize:16,fontWeight:800,color:"#0284c7"}}>{result.data.stage}</div>
          </div>
        ) : <div style={{color:"#ef4444"}}>対応するステージが見つかりませんでした</div>}
        <div style={{fontSize:11,color:"#0369a1",marginTop:10}}>※英語王は10問ずつ、タイピィの冒険は8問ずつのため、対応するステージは目安です</div>
      </div>
    );
  }
  if (result.type==="tg3_tapii_to_cat") {
    const catLabel = TG3_PAGE_CATS[result.data?.page_no]?.find(c=>c.cat_no===result.data?.cat_no)?.label;
    return (
      <div style={card}>
        <div style={lbl}>変換結果 — 単語王 中１単語</div>
        <div style={{fontSize:16,fontWeight:800,color:"#0369a1",marginBottom:10}}>🗺️ タイピィ ページ{result.tapii_page} - ステージ{result.tapii_stage}</div>
        <div style={sub}>▼ 単語王では</div>
        {result.data ? (
          <div style={{display:"flex",alignItems:"center",gap:10,background:"#e0f2fe",borderRadius:10,padding:"12px 14px"}}>
            <span style={{fontSize:20}}>📗</span>
            <div style={{fontSize:18,fontWeight:800,color:"#0284c7"}}>{tgPageNames[result.data.page_no]} / {catLabel}</div>
          </div>
        ) : <div style={{color:"#ef4444"}}>対応するカテゴリが見つかりませんでした</div>}
      </div>
    );
  }
  if (result.type==="tg5_to_tapii") {
    const pageName = tgPageNames[result.page_no];
    const catLabel = TG5_PAGE_CATS[result.page_no]?.find(c=>c.cat_no===result.cat_no)?.label || `カテゴリ${result.cat_no}`;
    return (
      <div style={card}>
        <div style={lbl}>変換結果 — 単語王 中２単語</div>
        <div style={{fontSize:16,fontWeight:800,color:"#0284c7",marginBottom:10}}>📘 単語王 {pageName} / {catLabel}</div>
        <div style={sub}>▼ タイピィの冒険では（開始ステージ）</div>
        {result.data ? (
          <div style={{display:"flex",alignItems:"center",gap:10,background:"#e0f2fe",borderRadius:10,padding:"12px 14px"}}>
            {chip(`ページ ${result.data.page}`,"#0ea5e9")}
            <div style={{fontSize:16,fontWeight:800,color:"#0284c7"}}>{result.data.stage}</div>
          </div>
        ) : <div style={{color:"#ef4444"}}>対応するステージが見つかりませんでした</div>}
        <div style={{fontSize:11,color:"#0369a1",marginTop:10}}>※英語王は10問ずつ、タイピィの冒険は8問ずつのため、対応するステージは目安です</div>
      </div>
    );
  }
  if (result.type==="tg5_tapii_to_cat") {
    const catLabel = TG5_PAGE_CATS[result.data?.page_no]?.find(c=>c.cat_no===result.data?.cat_no)?.label;
    return (
      <div style={card}>
        <div style={lbl}>変換結果 — 単語王 中２単語</div>
        <div style={{fontSize:16,fontWeight:800,color:"#0369a1",marginBottom:10}}>🗺️ タイピィ ページ{result.tapii_page} - ステージ{result.tapii_stage}</div>
        <div style={sub}>▼ 単語王では</div>
        {result.data ? (
          <div style={{display:"flex",alignItems:"center",gap:10,background:"#e0f2fe",borderRadius:10,padding:"12px 14px"}}>
            <span style={{fontSize:20}}>📘</span>
            <div style={{fontSize:18,fontWeight:800,color:"#0284c7"}}>{tgPageNames[result.data.page_no]} / {catLabel}</div>
          </div>
        ) : <div style={{color:"#ef4444"}}>対応するカテゴリが見つかりませんでした</div>}
      </div>
    );
  }
  if (result.type==="tg7_to_tapii") {
    const pageName = tgPageNames[result.page_no];
    const catLabel = TG7_PAGE_CATS[result.page_no]?.find(c=>c.cat_no===result.cat_no)?.label || `カテゴリ${result.cat_no}`;
    return (
      <div style={card}>
        <div style={lbl}>変換結果 — 単語王 中３単語</div>
        <div style={{fontSize:16,fontWeight:800,color:"#0284c7",marginBottom:10}}>📙 単語王 {pageName} / {catLabel}</div>
        <div style={sub}>▼ タイピィの冒険では（開始ステージ）</div>
        {result.data ? (
          <div style={{display:"flex",alignItems:"center",gap:10,background:"#e0f2fe",borderRadius:10,padding:"12px 14px"}}>
            {chip(`ページ ${result.data.page}`,"#0ea5e9")}
            <div style={{fontSize:16,fontWeight:800,color:"#0284c7"}}>{result.data.stage}</div>
          </div>
        ) : <div style={{color:"#ef4444"}}>対応するステージが見つかりませんでした</div>}
        <div style={{fontSize:11,color:"#0369a1",marginTop:10}}>※英語王は10問ずつ、タイピィの冒険は8問ずつのため、対応するステージは目安です</div>
      </div>
    );
  }
  if (result.type==="tg7_tapii_to_cat") {
    const catLabel = TG7_PAGE_CATS[result.data?.page_no]?.find(c=>c.cat_no===result.data?.cat_no)?.label;
    return (
      <div style={card}>
        <div style={lbl}>変換結果 — 単語王 中３単語</div>
        <div style={{fontSize:16,fontWeight:800,color:"#0369a1",marginBottom:10}}>🗺️ タイピィ ページ{result.tapii_page} - ステージ{result.tapii_stage}</div>
        <div style={sub}>▼ 単語王では</div>
        {result.data ? (
          <div style={{display:"flex",alignItems:"center",gap:10,background:"#e0f2fe",borderRadius:10,padding:"12px 14px"}}>
            <span style={{fontSize:20}}>📙</span>
            <div style={{fontSize:18,fontWeight:800,color:"#0284c7"}}>{tgPageNames[result.data.page_no]} / {catLabel}</div>
          </div>
        ) : <div style={{color:"#ef4444"}}>対応するカテゴリが見つかりませんでした</div>}
      </div>
    );
  }
  return null;
}
