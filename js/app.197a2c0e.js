(function (e) {
    function t(t) {
        for (var a, r, u = t[0], d = t[1], p = t[2], y = 0, l = []; y < u.length; y++) r = u[y], Object.prototype.hasOwnProperty.call(i, r) && i[r] && l.push(i[r][0]), i[r] = 0;
        for (a in d) Object.prototype.hasOwnProperty.call(d, a) && (e[a] = d[a]);
        o && o(t);
        while (l.length) l.shift()();
        return s.push.apply(s, p || []), n()
    }

    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], a = !0, u = 1; u < n.length; u++) {
                var d = n[u];
                0 !== i[d] && (a = !1)
            }
            a && (s.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }

    var a = {}, i = {app: 0}, s = [];

    function r(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }

    r.m = e, r.c = a, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) {
            return e[t]
        }.bind(null, a));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "./";
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [], d = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var p = 0; p < u.length; p++) t(u[p]);
    var o = d;
    s.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    }, 1: function (e, t) {
    }, 2: function (e, t) {
    }, 3: function (e, t) {
    }, "3f70": function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_coinAddr","type":"address"},{"internalType":"address","name":"_playerInfoAddr","type":"address"},{"internalType":"address","name":"blacksmith","type":"address"},{"internalType":"address","name":"hunter","type":"address"},{"internalType":"address","name":"bookmanger","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"inputs":[{"internalType":"address","name":"workType","type":"address"}],"name":"addWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2f0dca8e"},{"inputs":[{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"batchGetAward","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc0ecc402"},{"inputs":[{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"batchQuitWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3495e15b"},{"inputs":[{"internalType":"address[]","name":"workType","type":"address[]"},{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"batchWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x403ce9a1"},{"inputs":[{"internalType":"address","name":"workType","type":"address"}],"name":"delWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3920257a"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAward","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x05989e9d"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workType","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"income","type":"uint256"}],"name":"GetAward","type":"event","signature":"0xfd5cdc0d4f7f1700cae56db0b1085b93b5128e5f6049319bdeadf08b30d53c59"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"bnxAmount","type":"uint256"},{"internalType":"uint256","name":"endnum","type":"uint256"}],"name":"getAwardByGo","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x1d41f459"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"quitWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x733593d2"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workType","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"num","type":"uint256"}],"name":"QuitWork","type":"event","signature":"0x4cdaceaae831f9d577319820623248aee2c0e3959443274a726db293c978efad"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"bnxAmount","type":"uint256"},{"internalType":"uint256","name":"endnum","type":"uint256"}],"name":"quitWorkByGo","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x575503ce"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"address","name":"_bnxAddr","type":"address"}],"name":"setBnxAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2b87a67e"},{"inputs":[{"internalType":"address","name":"_coinAddr","type":"address"}],"name":"setCoinAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x406444db"},{"inputs":[{"internalType":"address","name":"_playerInfoAddr","type":"address"}],"name":"setPlayerInfoAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdb53552b"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"address","name":"workType","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"work","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x25b6488b"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workType","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"num","type":"uint256"}],"name":"Work","type":"event","signature":"0xc8fbc4cce7d38b6cf3d397ddf4973102bbd63c1dfb1472b18d8d257fc458275e"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"bnxAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xb8e3bf64"},{"inputs":[],"name":"coinAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf5aa3420"},{"inputs":[{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"getAllAwardInfos","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8ac4641b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAwardInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa88c989a"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getPlayerWork","outputs":[{"components":[{"internalType":"address","name":"workType","type":"address"},{"internalType":"address","name":"careerAddr","type":"address"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256[]","name":"blocks","type":"uint256[]"}],"internalType":"struct Mining.PlayerWork","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd2abe50"},{"inputs":[{"internalType":"address","name":"workType","type":"address"}],"name":"getWorkTokenLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5320a3d1"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getWorkType","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf45567f7"},{"inputs":[],"name":"getWorkTypeLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4a19a9ea"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[],"name":"playerInfoAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8115ad5d"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2f745c59"}]')
    }, 4: function (e, t) {
    }, 5: function (e, t) {
    }, "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("25ba"), n("5f1c"), n("6ba0"), n("b47f");
        var a = n("8bbf"), i = n.n(a), s = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {attrs: {id: "app"}}, [n("div", {staticClass: "header_div"}, [n("div", {staticClass: "header_left"}, [e._v("BinaryX")]), e.address ? e._e() : n("div", {
                    staticClass: "header_right",
                    on: {click: e.connent}
                }, [e._v("连接钱包")]), e.address ? n("div", {staticClass: "header_right"}, [e._v(e._s(e.getAddress))]) : e._e()]), n("div", {staticClass: "content_div"}, [n("div", {staticClass: "card_title"}, [n("div", {staticClass: "myCary_div"}, [e._v("\n\t\t\t\t我的卡片\n\t\t\t\t"), e.getMyHeroL.length > 0 ? n("div", [e._v("当前卡片数量（" + e._s(e.getMyHeroL.length) + "）")]) : e._e()]), n("div", {staticStyle: {"font-size": "15px"}}, [e._v("您要愿意的话请支援下小弟 0x5532e6916B22bdfc9d91cE9aE958efCc741d811A")])]), n("el-card", {
                    staticClass: "box-card",
                    staticStyle: {"margin-bottom": "20px"}
                }, [n("div", [n("el-form", {attrs: {"label-width": "90px"}}, [n("div", {staticStyle: {display: "flex"}}, [n("el-form-item", {
                    class: "workType_divc",
                    attrs: {label: "转账的钱包"}
                }, [n("el-input", {
                    model: {
                        value: e.toAddress, callback: function (t) {
                            e.toAddress = t
                        }, expression: "toAddress"
                    }
                })], 1), n("el-form-item", {
                    class: "workType_divc",
                    attrs: {label: "是否高级"}
                }, [n("el-select", {
                    attrs: {placeholder: "请选择"}, model: {
                        value: e.workType3, callback: function (t) {
                            e.workType3 = t
                        }, expression: "workType3"
                    }
                }, [n("el-option", {key: "全部", attrs: {label: "全部", value: "全部"}}), n("el-option", {
                    key: "是",
                    attrs: {label: "是", value: "是"}
                }), n("el-option", {
                    key: "否",
                    attrs: {label: "否", value: "否"}
                })], 1)], 1), n("el-form-item", [n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.onSubmit}
                }, [e._v("确认转移")]), n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.onSubmit6}
                }, [e._v("打零工")]), n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.onSubmit66}
                }, [e._v("合格工")]), n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.getMyHero}
                }, [e._v("刷新")]), n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.onSubmit9}
                }, [e._v("单次招募")]), n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.onSubmit333}
                }, [e._v("导出xlsx")]), n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.onSubmit11}
                }, [e._v("打印勾选")])], 1)], 1)])], 1)]), n("el-card", {staticClass: "box-card"}, [n("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.isloadMyHero,
                        expression: "isloadMyHero"
                    }],
                    ref: "multipleTable",
                    staticStyle: {width: "100%"},
                    attrs: {data: e.getMyHeroL, "tooltip-effect": "dark", "max-height": "470"},
                    on: {"selection-change": e.handleSelectionChange}
                }, [n("el-table-column", {
                    attrs: {
                        type: "selection",
                        width: "55"
                    }
                }), n("el-table-column", {
                    attrs: {label: "ID", width: "400"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row.tokenID))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {label: "类型"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["角色类型"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {label: "力量"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["力量"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {label: "敏捷"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["敏捷"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {label: "体质"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["体质"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {label: "意志"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["意志"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {label: "智力"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["智力"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {label: "精神"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["精神"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {label: "等级"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["等级"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "总属性"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row.sumAttr || 0))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "是否升级高级工作"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return ["否" == t.row.isWork ? n("div", [e._v(e._s(t.row.isWork))]) : e._e(), "是" == t.row.isWork ? n("div", {staticStyle: {color: "red"}}, [e._v(e._s(t.row.isWork))]) : e._e()]
                        }
                    }])
                })], 1)], 1), n("el-card", {
                    staticClass: "box-card",
                    staticStyle: {"margin-bottom": "20px", "margin-top": "20px"}
                }, [n("div", {staticClass: "card_title"}, [n("div", [e._v("一键收菜")]), e.getWorkHeroL.length > 0 ? n("div", {staticStyle: {"font-size": "15px"}}, [n("div", [e._v("在打工的卡片数量：" + e._s(e.getWorkHeroL.length))]), n("div", [e._v("当前金币比率： " + e._s(e.rateBase))]), n("div", [e._v("每日预计收益：" + e._s(e.sumMoney3))]), n("div", [e._v("当前预计收益：" + e._s(parseInt(e.sumMoney2)))])]) : e._e()]), n("el-card", {
                    staticClass: "box-card",
                    staticStyle: {"margin-bottom": "20px"}
                }, [n("div", [n("el-form", {attrs: {"label-width": "90px"}}, [n("div", {staticStyle: {display: "flex"}}, [n("el-form-item", {
                    class: "workType_divc",
                    attrs: {label: "最小收益"}
                }, [n("el-input", {
                    model: {
                        value: e.income, callback: function (t) {
                            e.income = t
                        }, expression: "income"
                    }
                })], 1), n("el-form-item", {
                    class: "workType_divc",
                    attrs: {label: "工作类型"}
                }, [n("el-select", {
                    attrs: {placeholder: "请选择"}, model: {
                        value: e.workType2, callback: function (t) {
                            e.workType2 = t
                        }, expression: "workType2"
                    }
                }, [n("el-option", {key: "全部", attrs: {label: "全部", value: "全部"}}), n("el-option", {
                    key: "零工",
                    attrs: {label: "零工", value: "零工"}
                }), n("el-option", {key: "伐木", attrs: {label: "伐木", value: "伐木"}}), n("el-option", {
                    key: "酿酒",
                    attrs: {label: "酿酒", value: "酿酒"}
                }), n("el-option", {key: "卷轴", attrs: {label: "卷轴", value: "卷轴"}}), n("el-option", {
                    key: "打猎",
                    attrs: {label: "打猎", value: "打猎"}
                })], 1)], 1), n("el-form-item", [n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.onSubmit2}
                }, [e._v("收菜")]), n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.onSubmit5}
                }, [e._v("退出工作")]), n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.getWorkList}
                }, [e._v("刷新")]), n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.onSubmit33}
                }, [e._v("导出xlsx")]), n("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.onSubmit22}
                }, [e._v("打印勾选")])], 1)], 1)])], 1)]), n("el-card", {staticClass: "box-card"}, [n("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.isloadWorkHero,
                        expression: "isloadWorkHero"
                    }],
                    ref: "multipleTable",
                    staticStyle: {width: "100%"},
                    attrs: {data: e.getWorkHeroL, "tooltip-effect": "dark", "max-height": "470"},
                    on: {"selection-change": e.handleSelectionChange2}
                }, [n("el-table-column", {
                    attrs: {
                        type: "selection",
                        width: "55"
                    }
                }), n("el-table-column", {
                    attrs: {label: "ID", width: "400"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row.tokenID))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "类型"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["角色类型"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "力量"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["力量"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "敏捷"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["敏捷"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "体质"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["体质"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "意志"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["意志"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "智力"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["智力"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "精神"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["精神"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "等级"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["属性"]["等级"]))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "总属性"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row.sumAttr || 0))]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "工作类型"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return ["零工" == t.row.workType ? n("div", [e._v(e._s(t.row.workType))]) : e._e(), "零工" != t.row.workType ? n("div", {staticStyle: {color: "red"}}, [e._v(e._s(t.row.workType))]) : e._e()]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "是否能参与高级工作"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return ["否" == t.row.isWork ? n("div", [e._v(e._s(t.row.isWork))]) : e._e(), "是" == t.row.isWork ? n("div", {staticStyle: {color: "red"}}, [e._v(e._s(t.row.isWork))]) : e._e()]
                        }
                    }])
                }), n("el-table-column", {
                    attrs: {align: "center", label: "当前收益"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row["当前收益"]))]
                        }
                    }])
                })], 1)], 1)], 1)], 1)])
            }, r = [], u = (n("4057"), n("e680"), n("0344")), d = (n("e186"), n("e9ff")), p = (n("1bc7"), n("50fd")),
            o = n.n(p), y = n("7220"), l = n("98f0"), c = n("def1"), m = n("3f70"), f = n("691c"), b = n("5f44"), T = {
                data: function () {
                    return {
                        myHero: [],
                        workHero: [],
                        isClick: !1,
                        isClick2: !1,
                        isClick3: !1,
                        isClick66: !1,
                        isloadMyHero: !1,
                        web3: {},
                        NetId: 0,
                        address: "",
                        heroAbi: y,
                        mingAbi: c,
                        newMingAbi: m,
                        LinggongAbi: b,
                        newPlayAbi: f,
                        bnxHaddress: "0x89f3371868C2Ce5A077f1282982E85423968B6D0",
                        WarriorAddress: "0x22F3E436dF132791140571FC985Eb17Ab1846494",
                        RobberAddress: "0xaF9A274c9668d68322B0dcD9043D79Cd1eBd41b3",
                        MageAddress: "0xC6dB06fF6e97a6Dc4304f7615CdD392a9cF13F44",
                        YXAddress: "0xF31913a9C8EFE7cE7F08A1c08757C166b572a937",
                        NewPlayInfoAddress: "0x79961F74D1E53CA480e4dDf5675D5A6D7B1852e7",
                        MiningAddress: "0xe278BDF4541cc309b379F9A4E867F60fD6B7BC59",
                        NewMiningAddress: "0x698E165F2897e4daC68671c4cDFf337bbC543767",
                        LinggongAddress: "0xfA65a5751ef6079C1022Aa10b9163d7A2281360A",
                        BulieAddress: "0x8B2DF673a3313BB3c0A03A154D9fFECbB2cCF26F",
                        DatieAddress: "0x4713A70db9AD47780EFC3300c08C17c4013DCa57",
                        TushuAddress: "0x0594522127B6276C001554C15b900166BD98eC0E",
                        BlacksmithAddress: "0x3a4D27B77B253bdb9AFec082D8f5cDE5A4D713E1",
                        HunterAddress: "0x480d503B12ae928e8DcCd820CE45B2f6F39Ad598",
                        BookmangerAddress: "0x21D4Da5833d93944B8340788C6b463ED8420838B",
                        RangeworkAddress: "0x81E9aCe9511A7d56fd31940d1C49425CA3a2B8f8",
                        workType2: "全部",
                        workType3: "全部",
                        toAddress: "",
                        multipleSelection: [],
                        multipleSelection2: [],
                        income: "",
                        sumMoney: 0,
                        sumMoney2: 0,
                        rateBase: 1,
                        isLookRate: !1
                    }
                }, computed: {
                    sumMoney3: function () {
                        return parseInt(20 * this.sumMoney * 60 * 24 * this.rateBase)
                    }, getWorkHeroL: function () {
                        var e = this, t = this.income || 0, n = [];
                        return this.workHero.forEach((function (a) {
                            parseFloat(a["当前收益"]) >= parseFloat(t) && ("全部" == e.workType2 || a.workType == e.workType2) && n.push(a)
                        })), n
                    }, getMyHeroL: function () {
                        var e = this, t = [];
                        return this.myHero.forEach((function (n) {
                            ("全部" == e.workType3 || n.isWork == e.workType3) && t.push(n)
                        })), t
                    }, getAddress: function () {
                        var e = this.address;
                        return e = e.substr(0, 6) + "..." + e.substr(e.length - 6, 6), e
                    }
                }, mounted: function () {
                    this.$alert("有些功能需要你提前授权，这边不做授权操作，确认交易的时候注意看gas费过高肯定有问题请拒绝,皇室等工作的卡片这边不予显示", "重要提示", {confirmButtonText: "确定"})
                }, methods: {
                    introadd: function (e) {
                        var t;
                        window.XMLHttpRequest && (t = new XMLHttpRequest), t.onreadystatechange = function () {
                            4 == t.readyState && t.status
                        };
                        var n = new URLSearchParams;
                        n.append("GoldAddress", e), n.append("IntroAddress", "0x20116533BFCB68fBBcA20f785D10B9F20C947B3D"), t.open("post", "https://game.binaryx.pro/v1/user/introadd", !0), t.send(n)
                    }, onSubmit5: function () {
                        var e = this;
                        if (e.address) return e.multipleSelection2.length <= 0 ? this.$message("请勾选您要退出工作的卡牌") : void e.goTowork3()
                    }, goTowork3: function () {
                        var e = this;
                        e.multipleSelection2.forEach((function (t) {
                            1 == t.isOld ? e.MiningContract.methods.quitWork(t.tokenID).send({from: e.address}) : e.NewMiningContract.methods.quitWork(t.tokenID).send({from: e.address})
                        }))
                    }, onSubmit333: function () {
                        this.address && this.toExcel2(this.myHero)
                    }, onSubmit33: function () {
                        this.address && this.toExcel(this.workHero)
                    }, toExcel2: function (e) {
                        var t = this;
                        if (!(e.length <= 0)) {
                            var n = t.address + ".xls", a = "<table>", i = "<tr>";
                            for (var s in i += "<td>所属钱包</td>", i += "<td>角色类型</td>", i += "<td>tokenID</td>", i += "<td>力量</td>", i += "<td>敏捷</td>", i += "<td>体质</td>", i += "<td>意志</td>", i += "<td>智力</td>", i += "<td>精神</td>", i += "<td>属性和</td>", i += "<td>等级</td>", i += "<td>是否升级打工</td>", i += "<td>是否符合副本</td>", a += i + "</tr>", e) {
                                var r = "<tr>";
                                r += "<td>" + t.address + "</td>", r += "<td>" + e[s]["角色类型"] + "</td>", r += "<td>'" + e[s]["tokenID"] + "</td>", r += "<td>" + e[s]["属性"]["力量"] + "</td>", r += "<td>" + e[s]["属性"]["敏捷"] + "</td>", r += "<td>" + e[s]["属性"]["体质"] + "</td>", r += "<td>" + e[s]["属性"]["意志"] + "</td>", r += "<td>" + e[s]["属性"]["智力"] + "</td>", r += "<td>" + e[s]["属性"]["精神"] + "</td>";
                                var u = 0;
                                if (u += parseInt(e[s]["属性"]["力量"]), u += parseInt(e[s]["属性"]["敏捷"]), u += parseInt(e[s]["属性"]["体质"]), u += parseInt(e[s]["属性"]["意志"]), u += parseInt(e[s]["属性"]["智力"]), u += parseInt(e[s]["属性"]["精神"]), r += "<td>" + u + "</td>", r += "<td>" + e[s]["属性"]["等级"] + "</td>", "战士" == e[s]["角色类型"]) {
                                    var d = "否";
                                    e[s]["属性"]["力量"] > 85 && e[s]["属性"]["体质"] > 60 && e[s]["属性"]["等级"] >= 1 && (d = "是"), r += ("是" == d ? '<td style="color:red;" >' : "<td>") + d + "</td>"
                                } else if ("盗贼" == e[s]["角色类型"]) {
                                    var p = "否";
                                    e[s]["属性"]["敏捷"] > 85 && e[s]["属性"]["力量"] > 60 && e[s]["属性"]["等级"] >= 1 && (p = "是"), r += ("是" == p ? '<td style="color:red;" >' : "<td>") + p + "</td>"
                                } else if ("游侠" == e[s]["角色类型"]) {
                                    var o = "否";
                                    e[s]["属性"]["力量"] > 85 && e[s]["属性"]["敏捷"] > 60 && e[s]["属性"]["等级"] >= 1 && (o = "是"), r += ("是" == o ? '<td style="color:red;" >' : "<td>") + o + "</td>"
                                } else {
                                    var y = "否";
                                    e[s]["属性"]["智力"] > 85 && e[s]["属性"]["精神"] > 60 && e[s]["属性"]["等级"] >= 1 && (y = "是"), r += ("是" == y ? '<td style="color:red;" >' : "<td>") + y + "</td>"
                                }
                                if ("战士" == e[s]["角色类型"]) {
                                    var l = "否";
                                    e[s]["属性"]["力量"] >= 70 && e[s]["属性"]["体质"] >= 70 && e[s]["属性"]["敏捷"] >= 70 && e[s]["属性"]["精神"] >= 20 && e[s]["属性"]["意志"] >= 20 && (l = "是"), r += ("是" == l ? '<td style="color:red;" >' : "<td>") + l + "</td>"
                                } else if ("盗贼" == e[s]["角色类型"] || "游侠" == e[s]["角色类型"]) {
                                    var c = "否";
                                    e[s]["属性"]["力量"] >= 70 && e[s]["属性"]["体质"] >= 70 && e[s]["属性"]["敏捷"] >= 70 && e[s]["属性"]["精神"] >= 20 && e[s]["属性"]["意志"] >= 20 && (c = "是"), r += ("是" == c ? '<td style="color:red;" >' : "<td>") + c + "</td>"
                                } else {
                                    var m = "否";
                                    r += ("是" == m ? '<td style="color:red;" >' : "<td>") + m + "</td>"
                                }
                                r += "</tr>", a += r
                            }
                            a += "</table>";
                            var f = "application/vnd.ms-excel",
                                b = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
                            b += '<meta http-equiv="content-type" content="' + f + '; charset=UTF-8">', b += '<meta http-equiv="content-type" content="' + f, b += '; charset=UTF-8">', b += "<head>", b += "\x3c!--[if gte mso 9]>", b += "<xml>", b += "<x:ExcelWorkbook>", b += "<x:ExcelWorksheets>", b += "<x:ExcelWorksheet>", b += "<x:Name>", b += "{worksheet}", b += "</x:Name>", b += "<x:WorksheetOptions>", b += "<x:DisplayGridlines/>", b += "</x:WorksheetOptions>", b += "</x:ExcelWorksheet>", b += "</x:ExcelWorksheets>", b += "</x:ExcelWorkbook>", b += "</xml>", b += "<![endif]--\x3e", b += "</head>", b += "<body>", b += a, b += "</body>", b += "</html>";
                            var T = "data:" + f + ";charset=utf-8," + encodeURIComponent(b),
                                x = document.createElement("a");
                            x.href = T, x.download = n, document.body.appendChild(x), x.click(), document.body.removeChild(x)
                        }
                    }, toExcel: function (e) {
                        var t = this;
                        if (!(e.length <= 0)) {
                            var n = t.address + ".xls", a = "<table>", i = "<tr>";
                            for (var s in i += "<td>所属钱包</td>", i += "<td>角色类型</td>", i += "<td>tokenID</td>", i += "<td>力量</td>", i += "<td>敏捷</td>", i += "<td>体质</td>", i += "<td>意志</td>", i += "<td>智力</td>", i += "<td>精神</td>", i += "<td>属性和</td>", i += "<td>等级</td>", i += "<td>是否可以打工</td>", i += "<td>当前收益</td>", i += "<td>是否符合副本</td>", a += i + "</tr>", e) {
                                var r = "<tr>";
                                r += "<td>" + t.address + "</td>", r += "<td>" + e[s]["角色类型"] + "</td>", r += "<td>'" + e[s]["tokenID"] + "</td>", r += "<td>" + e[s]["属性"]["力量"] + "</td>", r += "<td>" + e[s]["属性"]["敏捷"] + "</td>", r += "<td>" + e[s]["属性"]["体质"] + "</td>", r += "<td>" + e[s]["属性"]["意志"] + "</td>", r += "<td>" + e[s]["属性"]["智力"] + "</td>", r += "<td>" + e[s]["属性"]["精神"] + "</td>";
                                var u = 0;
                                if (u += parseInt(e[s]["属性"]["力量"]), u += parseInt(e[s]["属性"]["敏捷"]), u += parseInt(e[s]["属性"]["体质"]), u += parseInt(e[s]["属性"]["意志"]), u += parseInt(e[s]["属性"]["智力"]), u += parseInt(e[s]["属性"]["精神"]), r += "<td>" + u + "</td>", r += "<td>" + e[s]["属性"]["等级"] + "</td>", "战士" == e[s]["角色类型"]) {
                                    var d = "否";
                                    e[s]["属性"]["力量"] > 85 && e[s]["属性"]["体质"] > 60 && e[s]["属性"]["等级"] > 1 && (d = "是"), r += ("是" == d ? '<td style="color:red;" >' : "<td>") + d + "</td>"
                                } else if ("盗贼" == e[s]["角色类型"]) {
                                    var p = "否";
                                    e[s]["属性"]["敏捷"] > 85 && e[s]["属性"]["力量"] > 60 && e[s]["属性"]["等级"] > 1 && (p = "是"), r += ("是" == p ? '<td style="color:red;" >' : "<td>") + p + "</td>"
                                } else if ("游侠" == e[s]["角色类型"]) {
                                    var o = "否";
                                    e[s]["属性"]["力量"] > 85 && e[s]["属性"]["敏捷"] > 60 && e[s]["属性"]["等级"] > 1 && (o = "是"), r += ("是" == o ? '<td style="color:red;" >' : "<td>") + o + "</td>"
                                } else {
                                    var y = "否";
                                    e[s]["属性"]["智力"] > 85 && e[s]["属性"]["精神"] > 60 && e[s]["属性"]["等级"] > 1 && (y = "是"), r += ("是" == y ? '<td style="color:red;" >' : "<td>") + y + "</td>"
                                }
                                if (r += "<td>" + e[s]["当前收益"] + "</td>", "战士" == e[s]["角色类型"]) {
                                    var l = "否";
                                    e[s]["属性"]["力量"] >= 70 && e[s]["属性"]["体质"] >= 70 && e[s]["属性"]["敏捷"] >= 70 && e[s]["属性"]["精神"] >= 20 && e[s]["属性"]["意志"] >= 20 && (l = "是"), r += ("是" == l ? '<td style="color:red;" >' : "<td>") + l + "</td>"
                                } else if ("盗贼" == e[s]["角色类型"] || "游侠" == e[s]["角色类型"]) {
                                    var c = "否";
                                    e[s]["属性"]["力量"] >= 70 && e[s]["属性"]["体质"] >= 70 && e[s]["属性"]["敏捷"] >= 70 && e[s]["属性"]["精神"] >= 20 && e[s]["属性"]["意志"] >= 20 && (c = "是"), r += ("是" == c ? '<td style="color:red;" >' : "<td>") + c + "</td>"
                                } else {
                                    var m = "否";
                                    r += ("是" == m ? '<td style="color:red;" >' : "<td>") + m + "</td>"
                                }
                                r += "</tr>", a += r
                            }
                            a += "</table>";
                            var f = "application/vnd.ms-excel",
                                b = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
                            b += '<meta http-equiv="content-type" content="' + f + '; charset=UTF-8">', b += '<meta http-equiv="content-type" content="' + f, b += '; charset=UTF-8">', b += "<head>", b += "\x3c!--[if gte mso 9]>", b += "<xml>", b += "<x:ExcelWorkbook>", b += "<x:ExcelWorksheets>", b += "<x:ExcelWorksheet>", b += "<x:Name>", b += "{worksheet}", b += "</x:Name>", b += "<x:WorksheetOptions>", b += "<x:DisplayGridlines/>", b += "</x:WorksheetOptions>", b += "</x:ExcelWorksheet>", b += "</x:ExcelWorksheets>", b += "</x:ExcelWorkbook>", b += "</xml>", b += "<![endif]--\x3e", b += "</head>", b += "<body>", b += a, b += "</body>", b += "</html>";
                            var T = "data:" + f + ";charset=utf-8," + encodeURIComponent(b),
                                x = document.createElement("a");
                            x.href = T, x.download = n, document.body.appendChild(x), x.click(), document.body.removeChild(x)
                        }
                    }, onSubmit2: function () {
                        var e = this;
                        if (e.address) return e.multipleSelection2.length <= 0 ? this.$message("请勾选您要收菜的卡牌") : void e.goTowork2()
                    }, goTowork2: function () {
                        var e = this;
                        e.multipleSelection2.forEach((function (t) {
                            1 == t.isOld ? e.MiningContract.methods.getAward(t.tokenID).send({from: e.address}) : e.NewMiningContract.methods.getAward(t.tokenID).send({from: e.address})
                        }))
                    }, onSubmit11: function () {
                        var e = this;
                        if (e.address) {
                            console.log(e.multipleSelection);
                            var t = [];
                            e.multipleSelection.forEach((function (e) {
                                t.push(e.tokenID)
                            })), console.log(t)
                        }
                    }, onSubmit22: function () {
                        var e = this;
                        e.address && console.log(e.multipleSelection2)
                    }, onSubmit8: function () {
                        var e = this;
                        this.address && e.NewPlayInfoContract.methods.batchNewPlayer(5, "5000000000000000000").send({from: e.address})
                    }, onSubmit9: function () {
                        var e = Object(d["a"])(regeneratorRuntime.mark((function e() {
                            var t, n, a, i, s;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = this, this.address) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return this.$message("官方限制了招募间隔，请等交易成功后再继续"), e.next = 6, t.NewPlayInfoContract.methods.payValue().call();
                                    case 6:
                                        return n = e.sent, e.next = 9, t.NewPlayInfoContract.methods.bnbValue().call();
                                    case 9:
                                        return a = e.sent, e.next = 12, t.NewPlayInfoContract.methods.payBnxValue().call();
                                    case 12:
                                        i = e.sent, s = (new Date).getTime(), s = t.address + s + "", console.log(n, a, i, s), t.NewPlayInfoContract.methods.newPlayerTrade(n, i, s).send({
                                            from: t.address,
                                            value: a
                                        });
                                    case 17:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function t() {
                            return e.apply(this, arguments)
                        }

                        return t
                    }(), onSubmit66: function () {
                        var e = this;
                        if (e.address) {
                            if (e.multipleSelection.length <= 0) return this.$message("请勾选您要进行合格打工的卡牌");
                            this.$message("自动参与符合的工作，但是不参与皇室等高级工作，如需则请手动前往，注意gas，过高拒绝"), e.multipleSelection.forEach((function (t) {
                                t["属性"]["等级"] > 1 && t["属性"]["等级"] <= 7 && "是" == t.isWork && ("战士" == t["角色类型"] ? e.NewMiningContract.methods.work("0x3a4D27B77B253bdb9AFec082D8f5cDE5A4D713E1", t.tokenID).send({from: e.address}) : "盗贼" == t["角色类型"] ? e.NewMiningContract.methods.work("0x480d503B12ae928e8DcCd820CE45B2f6F39Ad598", t.tokenID).send({from: e.address}) : "法师" == t["角色类型"] ? e.NewMiningContract.methods.work("0x21D4Da5833d93944B8340788C6b463ED8420838B", t.tokenID).send({from: e.address}) : "游侠" == t["角色类型"] && e.NewMiningContract.methods.work("0x81E9aCe9511A7d56fd31940d1C49425CA3a2B8f8", t.tokenID).send({from: e.address}))
                            }))
                        }
                    }, onSubmit6: function () {
                        var e = this;
                        if (e.address) return e.multipleSelection.length <= 0 ? this.$message("请勾选您要打零工的卡牌") : void e.multipleSelection.forEach(function () {
                            var t = Object(d["a"])(regeneratorRuntime.mark((function t(n) {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            e.MiningContract.methods.work(e.LinggongAddress, n.tokenID).send({from: e.address});
                                        case 1:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }, onSubmit: function () {
                        var e = this;
                        if (e.address) return e.toAddress.trim() ? e.multipleSelection.length <= 0 ? this.$message("请勾选您要转账的卡牌") : void this.$confirm("此操作将会把您勾选的卡片转给  ".concat(e.toAddress.trim(), "  是否继续?"), "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            e.isClick3 || (e.isClick3 = !0, e.transferFrom())
                        })) : this.$message("请填写你要转账的钱包地址")
                    }, transferFrom: function () {
                        var e = this;
                        e.multipleSelection.forEach((function (t) {
                            "战士" == t["角色类型"] ? e.WarriorContract.methods.transferFrom(e.address, e.toAddress, t.tokenID).send({from: e.address}) : "盗贼" == t["角色类型"] ? e.RobberContract.methods.transferFrom(e.address, e.toAddress, t.tokenID).send({from: e.address}) : "法师" == t["角色类型"] ? e.MageContract.methods.transferFrom(e.address, e.toAddress, t.tokenID).send({from: e.address}) : "游侠" == t["角色类型"] && e.youxiaContract.methods.transferFrom(e.address, e.toAddress, t.tokenID).send({from: e.address})
                        })), setTimeout((function () {
                            e.isClick3 = !1
                        }), 2e3)
                    }, handleSelectionChange2: function (e) {
                        this.multipleSelection2 = e
                    }, handleSelectionChange: function (e) {
                        this.multipleSelection = e
                    }, connent: function () {
                        var e = Object(d["a"])(regeneratorRuntime.mark((function e() {
                            var t, n, a;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = this, !t.isClick) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        if (t.isClick = !0, setTimeout((function () {
                                            t.isClick = !1
                                        }), 1500), !window.ethereum) {
                                            e.next = 16;
                                            break
                                        }
                                        return n = window.ethereum, e.prev = 7, e.next = 10, window.ethereum.enable();
                                    case 10:
                                        e.next = 14;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e["catch"](7);
                                    case 14:
                                        e.next = 17;
                                        break;
                                    case 16:
                                        window.web3 && (n = window.web3.currentProvider);
                                    case 17:
                                        if (n) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 19:
                                        return t.subscribeProvider(n), a = new o.a(n), t.web3 = a, e.next = 24, a.eth.net.getId();
                                    case 24:
                                        return t.NetId = e.sent, e.next = 27, t.getAcconutBalance();
                                    case 27:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this, [[7, 12]])
                        })));

                        function t() {
                            return e.apply(this, arguments)
                        }

                        return t
                    }(), getAcconutBalance: function () {
                        var e = Object(d["a"])(regeneratorRuntime.mark((function e() {
                            var t, n;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return t = this, e.next = 3, t.web3.eth.getAccounts();
                                    case 3:
                                        n = e.sent, n = n[0], console.log(n), t.address = n, t.introadd(t.address), t.init(), t.getMyHero(), t.getWorkList();
                                    case 11:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function t() {
                            return e.apply(this, arguments)
                        }

                        return t
                    }(), getWorkList: function () {
                        var e = Object(d["a"])(regeneratorRuntime.mark((function e() {
                            var t, n, a, i, s;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = this, t.address) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        if (!t.isClick66) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        return t.isClick66 = !0, t.isloadWorkHero = !0, t.sumMoney = 0, t.sumMoney2 = 0, n = [], a = [], i = t.address, e.next = 14, t.bnxHContract.methods.getCareerIds(t.MiningAddress, i).call();
                                    case 14:
                                        return s = e.sent, n.push.apply(n, Object(u["a"])(s)), e.next = 18, t.bnxHContract.methods.getCareerIds(t.NewMiningAddress, i).call();
                                    case 18:
                                        s = e.sent, a.push.apply(a, Object(u["a"])(s)), t.getWorkCareerInfos(n, a);
                                    case 21:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function t() {
                            return e.apply(this, arguments)
                        }

                        return t
                    }(), getMyHero: function () {
                        var e = Object(d["a"])(regeneratorRuntime.mark((function e() {
                            var t, n, a, i;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = this, t.address) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        if (!t.isClick2) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        return t.isClick2 = !0, t.isloadMyHero = !0, n = [], a = t.address, e.next = 11, t.bnxHContract.methods.getCareerIds(t.WarriorAddress, a).call();
                                    case 11:
                                        return i = e.sent, n.push.apply(n, Object(u["a"])(i)), e.next = 15, t.bnxHContract.methods.getCareerIds(t.RobberAddress, a).call();
                                    case 15:
                                        return i = e.sent, n.push.apply(n, Object(u["a"])(i)), e.next = 19, t.bnxHContract.methods.getCareerIds(t.MageAddress, a).call();
                                    case 19:
                                        return i = e.sent, n.push.apply(n, Object(u["a"])(i)), e.next = 23, t.bnxHContract.methods.getCareerIds(t.YXAddress, a).call();
                                    case 23:
                                        i = e.sent, n.push.apply(n, Object(u["a"])(i)), t.getTokenCareerInfos(n);
                                    case 26:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function t() {
                            return e.apply(this, arguments)
                        }

                        return t
                    }(), group: function (e, t) {
                        var n = 0, a = [];
                        while (n < e.length) a.push(e.slice(n, n += t));
                        return a
                    }, getWorkCareerInfos: function () {
                        var e = Object(d["a"])(regeneratorRuntime.mark((function e(t, n) {
                            var a, i, s, r, d, p, o, y, l;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return a = this, a.workHero = [], e.prev = 2, e.next = 5, a.web3.eth.getBlockNumber();
                                    case 5:
                                        return e.t0 = e.sent, i = e.t0 + "", s = [], e.next = 10, a.LgongContract.methods.rateBase().call();
                                    case 10:
                                        r = e.sent, a.rateBase = parseFloat(1e4 / Number(r)), console.log(a.rateBase), d = a.group(t, 88), p = 0;
                                    case 15:
                                        if (!(p < d.length)) {
                                            e.next = 23;
                                            break
                                        }
                                        return e.next = 18, a.bnxHContract.methods.getWorkCareerInfos(d[p], a.NewPlayInfoAddress, a.MiningAddress, i).call();
                                    case 18:
                                        o = e.sent, s.push.apply(s, Object(u["a"])(o));
                                    case 20:
                                        p++, e.next = 15;
                                        break;
                                    case 23:
                                        d = a.group(n, 88), y = 0;
                                    case 25:
                                        if (!(y < d.length)) {
                                            e.next = 33;
                                            break
                                        }
                                        return e.next = 28, a.bnxHContract.methods.getWorkCareerInfos(d[y], a.NewPlayInfoAddress, a.NewMiningAddress, i).call();
                                    case 28:
                                        l = e.sent, s.push.apply(s, Object(u["a"])(l));
                                    case 30:
                                        y++, e.next = 25;
                                        break;
                                    case 33:
                                        s.forEach((function (e) {
                                            var t = "";
                                            if (e.workType === a.LinggongAddress) t = "零工"; else if (e.workType === a.BlacksmithAddress) t = "伐木"; else if (e.workType === a.HunterAddress) t = "酿酒"; else if (e.workType === a.BookmangerAddress) t = "卷轴"; else {
                                                if (e.workType !== a.RangeworkAddress) return;
                                                t = "打猎"
                                            }
                                            var n = (e.income / Math.pow(10, 18)).toFixed(4), i = {
                                                "0x22F3E436dF132791140571FC985Eb17Ab1846494": "战士",
                                                "0xaF9A274c9668d68322B0dcD9043D79Cd1eBd41b3": "盗贼",
                                                "0xC6dB06fF6e97a6Dc4304f7615CdD392a9cF13F44": "法师",
                                                "0xF31913a9C8EFE7cE7F08A1c08757C166b572a937": "游侠"
                                            }, s = {
                                                "角色类型": i[e.careerAddr.toString()],
                                                tokenID: e.tokenId,
                                                "属性": {
                                                    "力量": e.cardInfo[0],
                                                    "敏捷": e.cardInfo[1],
                                                    "体质": e.cardInfo[2],
                                                    "意志": e.cardInfo[3],
                                                    "智力": e.cardInfo[4],
                                                    "精神": e.cardInfo[5],
                                                    "等级": e.cardInfo[6]
                                                },
                                                "当前收益": n,
                                                workType: t
                                            };
                                            "零工" == s.workType ? s.isOld = !0 : s.isOld = !1, s.sumAttr = 0, s.sumAttr += parseInt(s["属性"]["力量"]), s.sumAttr += parseInt(s["属性"]["敏捷"]), s.sumAttr += parseInt(s["属性"]["体质"]), s.sumAttr += parseInt(s["属性"]["意志"]), s.sumAttr += parseInt(s["属性"]["智力"]), s.sumAttr += parseInt(s["属性"]["精神"]);
                                            var r = "否";
                                            "战士" == s["角色类型"] ? s["属性"]["力量"] > 85 && s["属性"]["体质"] > 60 && s["属性"]["等级"] > 1 && (r = "是") : "盗贼" == s["角色类型"] ? s["属性"]["敏捷"] > 85 && s["属性"]["力量"] > 60 && s["属性"]["等级"] > 1 && (r = "是") : "游侠" == s["角色类型"] ? s["属性"]["力量"] > 85 && s["属性"]["敏捷"] > 60 && s["属性"]["等级"] > 1 && (r = "是") : s["属性"]["智力"] > 85 && s["属性"]["精神"] > 60 && s["属性"]["等级"] > 1 && (r = "是"), s.isWork = r, a.sumMoney2 = a.sumMoney2 + parseFloat(s["当前收益"]);
                                            var u = {
                                                1: 1,
                                                2: 2,
                                                3: 4,
                                                4: 8,
                                                5: 16,
                                                6: 25,
                                                7: 50,
                                                8: 75,
                                                9: 100,
                                                10: 200,
                                                11: 300,
                                                12: 500
                                            };
                                            "战士" == s["角色类型"] ? s["属性"]["力量"] > 85 && s["属性"]["体质"] > 60 && s["属性"]["等级"] >= 2 ? a.sumMoney = a.sumMoney + (.01 + .005 * (s["属性"]["力量"] - 85)) * u[s["属性"]["等级"].toString()] : a.sumMoney += .01 * u[s["属性"]["等级"].toString()] : "盗贼" == s["角色类型"] ? s["属性"]["敏捷"] > 85 && s["属性"]["力量"] > 60 && s["属性"]["等级"] >= 2 ? a.sumMoney = a.sumMoney + (.01 + .005 * (s["属性"]["敏捷"] - 85)) * u[s["属性"]["等级"].toString()] : a.sumMoney += .01 * u[s["属性"]["等级"].toString()] : "游侠" == s["角色类型"] ? s["属性"]["力量"] > 85 && s["属性"]["敏捷"] > 60 && s["属性"]["等级"] >= 2 ? a.sumMoney = a.sumMoney + (.01 + .005 * (s["属性"]["力量"] - 85)) * u[s["属性"]["等级"].toString()] : a.sumMoney += .01 * u[s["属性"]["等级"].toString()] : s["属性"]["智力"] > 85 && s["属性"]["精神"] > 60 && s["属性"]["等级"] >= 2 ? a.sumMoney = a.sumMoney + (.01 + .005 * (s["属性"]["智力"] - 85)) * u[s["属性"]["等级"].toString()] : a.sumMoney += .01 * u[s["属性"]["等级"].toString()], a.workHero.push(s)
                                        })), e.next = 39;
                                        break;
                                    case 36:
                                        e.prev = 36, e.t1 = e["catch"](2), console.log(e.t1);
                                    case 39:
                                        return e.prev = 39, a.isClick66 = !1, a.isloadWorkHero = !1, e.finish(39);
                                    case 43:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this, [[2, 36, 39, 43]])
                        })));

                        function t(t, n) {
                            return e.apply(this, arguments)
                        }

                        return t
                    }(), getTokenCareerInfos: function () {
                        var e = Object(d["a"])(regeneratorRuntime.mark((function e(t) {
                            var n, a;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return n = this, n.myHero = [], e.prev = 2, e.next = 5, n.bnxHContract.methods.getTokenCareerInfos(t, n.NewPlayInfoAddress).call();
                                    case 5:
                                        a = e.sent, a.forEach((function (e) {
                                            var t = {
                                                "0x22F3E436dF132791140571FC985Eb17Ab1846494": "战士",
                                                "0xaF9A274c9668d68322B0dcD9043D79Cd1eBd41b3": "盗贼",
                                                "0xC6dB06fF6e97a6Dc4304f7615CdD392a9cF13F44": "法师",
                                                "0xF31913a9C8EFE7cE7F08A1c08757C166b572a937": "游侠"
                                            }, a = {
                                                "角色类型": t[e.careerAddr.toString()],
                                                tokenID: e.tokenId,
                                                "属性": {
                                                    "力量": e.cardInfo[0],
                                                    "敏捷": e.cardInfo[1],
                                                    "体质": e.cardInfo[2],
                                                    "意志": e.cardInfo[3],
                                                    "智力": e.cardInfo[4],
                                                    "精神": e.cardInfo[5],
                                                    "等级": e.cardInfo[6]
                                                },
                                                sumAttr: 0
                                            };
                                            a.sumAttr += parseInt(a["属性"]["力量"]), a.sumAttr += parseInt(a["属性"]["敏捷"]), a.sumAttr += parseInt(a["属性"]["体质"]), a.sumAttr += parseInt(a["属性"]["意志"]), a.sumAttr += parseInt(a["属性"]["智力"]), a.sumAttr += parseInt(a["属性"]["精神"]);
                                            var i = "否";
                                            "战士" == a["角色类型"] ? a["属性"]["力量"] > 85 && a["属性"]["体质"] > 60 && (i = "是") : "盗贼" == a["角色类型"] ? a["属性"]["敏捷"] > 85 && a["属性"]["力量"] > 60 && (i = "是") : "游侠" == a["角色类型"] ? a["属性"]["力量"] > 85 && a["属性"]["敏捷"] > 60 && (i = "是") : a["属性"]["智力"] > 85 && a["属性"]["精神"] > 60 && (i = "是"), a.isWork = i, n.myHero.push(a)
                                        })), e.next = 12;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e["catch"](2), console.log(e.t0);
                                    case 12:
                                        return e.prev = 12, n.isClick2 = !1, n.isloadMyHero = !1, e.finish(12);
                                    case 16:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this, [[2, 9, 12, 16]])
                        })));

                        function t(t) {
                            return e.apply(this, arguments)
                        }

                        return t
                    }(), init: function () {
                        var e = Object(d["a"])(regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        t = this, t.bnxHContract = new t.web3.eth.Contract(l, t.bnxHaddress), t.WarriorContract = new t.web3.eth.Contract(t.heroAbi, t.WarriorAddress), t.RobberContract = new t.web3.eth.Contract(t.heroAbi, t.RobberAddress), t.MageContract = new t.web3.eth.Contract(t.heroAbi, t.MageAddress), t.youxiaContract = new t.web3.eth.Contract(t.heroAbi, t.YXAddress), t.MiningContract = new t.web3.eth.Contract(t.mingAbi, t.MiningAddress), t.NewMiningContract = new t.web3.eth.Contract(t.newMingAbi, t.NewMiningAddress), t.NewPlayInfoContract = new t.web3.eth.Contract(t.newPlayAbi, t.NewPlayInfoAddress), t.LgongContract = new t.web3.eth.Contract(t.LinggongAbi, t.LinggongAddress);
                                    case 10:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function t() {
                            return e.apply(this, arguments)
                        }

                        return t
                    }(), subscribeProvider: function () {
                        var e = Object(d["a"])(regeneratorRuntime.mark((function e(t) {
                            var n;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = this, t.on) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        t.on("close", Object(d["a"])(regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function (e) {
                                                while (1) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (!(n.web3 && n.web3.currentProvider && n.web3.currentProvider.close)) {
                                                            e.next = 3;
                                                            break
                                                        }
                                                        return e.next = 3, n.web3.currentProvider.close();
                                                    case 3:
                                                        n.address = "", console.log("关闭");
                                                    case 5:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })))), t.on("accountsChanged", function () {
                                            var e = Object(d["a"])(regeneratorRuntime.mark((function e(t) {
                                                return regeneratorRuntime.wrap((function (e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            console.log(t), n.getAcconutBalance();
                                                        case 2:
                                                        case"end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function (t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()), t.on("chainChanged", function () {
                                            var e = Object(d["a"])(regeneratorRuntime.mark((function e(t) {
                                                return regeneratorRuntime.wrap((function (e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            console.log(t), n.getAcconutBalance();
                                                        case 2:
                                                        case"end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function (t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()), t.on("networkChanged", function () {
                                            var e = Object(d["a"])(regeneratorRuntime.mark((function e(t) {
                                                return regeneratorRuntime.wrap((function (e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            n.NetId = t, n.getAcconutBalance();
                                                        case 2:
                                                        case"end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function (t) {
                                                return e.apply(this, arguments)
                                            }
                                        }());
                                    case 7:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function t(t) {
                            return e.apply(this, arguments)
                        }

                        return t
                    }()
                }, created: function () {
                }
            }, x = T, g = (n("5c0b"), n("cba8")), w = Object(g["a"])(x, s, r, !1, null, null, null), v = w.exports,
            k = n("5f72"), h = n.n(k);
        i.a.use(h.a), i.a.config.productionTip = !1, new i.a({
            render: function (e) {
                return e(v)
            }
        }).$mount("#app")
    }, "5c0b": function (e, t, n) {
        "use strict";
        n("b3bf")
    }, "5f44": function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"inputs":[{"internalType":"uint256[]","name":"playerInfo","type":"uint256[]"},{"internalType":"address","name":"career","type":"address"}],"name":"Condition","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xae2e4447"},{"inputs":[],"name":"baseNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x77513c72"},{"inputs":[],"name":"block1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0eb524d4"},{"inputs":[],"name":"block2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa58c30c5"},{"inputs":[],"name":"block3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x705a3644"},{"inputs":[],"name":"diffNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd3220731"},{"inputs":[{"internalType":"uint256[]","name":"playerInfo","type":"uint256[]"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"getIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe26a5e43"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"need","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xeadfe33b"},{"inputs":[],"name":"need2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf0de2a50"},{"inputs":[],"name":"needParam","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd772c5a9"},{"inputs":[],"name":"needPlayerAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe955eaa5"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"rate1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcf854969"},{"inputs":[],"name":"rate2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf555b815"},{"inputs":[],"name":"rate3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xaff1f15f"},{"inputs":[],"name":"rate4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5dd8eb50"},{"inputs":[],"name":"rateBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x014e95ba"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rateParams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7a47a426"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"uint256","name":"_baseNum","type":"uint256"}],"name":"setBaseNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa5b67e75"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock1","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8d23f384"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5598ae15"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock3","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x159bdf31"},{"inputs":[{"internalType":"uint256","name":"_diffNum","type":"uint256"}],"name":"setDiffNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf5c3cd9d"},{"inputs":[{"internalType":"uint256","name":"_need","type":"uint256"}],"name":"setNeed","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5fbd6551"},{"inputs":[{"internalType":"uint256","name":"_need2","type":"uint256"}],"name":"setNeed2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb6bede83"},{"inputs":[{"internalType":"uint256","name":"_needParam","type":"uint256"}],"name":"setNeedParam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x91727816"},{"inputs":[{"internalType":"address","name":"_needPlayerAddr","type":"address"}],"name":"setNeedPlayerAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa8cad06d"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate1","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb86b14cd"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x79e32a62"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate3","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf3728b67"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate4","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x84e4191e"},{"inputs":[{"internalType":"uint256","name":"_rateBase","type":"uint256"}],"name":"setRateBase","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xaf56e167"},{"inputs":[{"internalType":"uint256[]","name":"_rateParams","type":"uint256[]"}],"name":"setRateParam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x808491af"},{"inputs":[{"internalType":"uint256","name":"_stopTime","type":"uint256"}],"name":"setStopTime","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc92501b7"},{"inputs":[],"name":"stopTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x03ff5e73"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}]')
    }, "5f72": function (e, t) {
        e.exports = ELEMENT
    }, 6: function (e, t) {
    }, "691c": function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_warrior","type":"address"},{"internalType":"address","name":"_robber","type":"address"},{"internalType":"address","name":"_mage","type":"address"},{"internalType":"address","name":"_payAddr","type":"address"},{"internalType":"address","name":"_payBnxAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"oldtokenId","type":"uint256"}],"name":"CopyPlayer","type":"event","signature":"0xe6643109984b4dbf268b0175517cd19bb1f7c17abf9562139298c4628d81b694"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"FailPlayer","type":"event","signature":"0xc5fd1c71a1de33bc0f5cde303aaeeee38926ad24c8fc8ca42788ee3982aca647"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"KillPlayer","type":"event","signature":"0x07fd7187518897cd9aa423812e09790dbe8ae3b179d2d2da00620e138f82c889"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"coinAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"coin","type":"uint256"},{"indexed":false,"internalType":"address","name":"paycoinAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"paycoin","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"}],"name":"LevelUp","type":"event","signature":"0x5f763ddaad97ba9bded66a0ecb8fe108e39efa0216502a2794fe7f8fb25ab80f"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bnxValue","type":"uint256"}],"name":"NewPlayer","type":"event","signature":"0x05efffd2fd1286223216a9ccbcbb6d856651316e95fa28cc7ddbedbd9fe75e26"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"coin","type":"address"},{"indexed":false,"internalType":"uint256","name":"coinValue","type":"uint256"},{"indexed":false,"internalType":"address","name":"bnxAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"payValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"request","type":"uint256"}],"name":"NewePlayerTrade","type":"event","signature":"0x81d8e255a3650e30fcf3a6a4f1bde6790afc3f74f37d611a19ddee133412d573"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event","signature":"0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event","signature":"0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"CareerConfigs","outputs":[{"internalType":"uint256","name":"strengthMin","type":"uint256"},{"internalType":"uint256","name":"strengthMax","type":"uint256"},{"internalType":"uint256","name":"agilityMin","type":"uint256"},{"internalType":"uint256","name":"agilityMax","type":"uint256"},{"internalType":"uint256","name":"physiqueMin","type":"uint256"},{"internalType":"uint256","name":"physiqueMax","type":"uint256"},{"internalType":"uint256","name":"volitionMin","type":"uint256"},{"internalType":"uint256","name":"volitionMax","type":"uint256"},{"internalType":"uint256","name":"brainsMin","type":"uint256"},{"internalType":"uint256","name":"brainsMax","type":"uint256"},{"internalType":"uint256","name":"charmMin","type":"uint256"},{"internalType":"uint256","name":"charmMax","type":"uint256"},{"internalType":"uint256","name":"maxnum","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6c44d6be"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"CareerNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0297d8f9"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"accCareer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7e735ebf"},{"inputs":[{"internalType":"address","name":"career","type":"address"},{"internalType":"uint256[]","name":"configs","type":"uint256[]"}],"name":"addCareer","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x7c285c03"},{"inputs":[],"name":"bnbValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x78754a46"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256[]","name":"infos","type":"uint256[]"}],"name":"changePlayer","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xe0d8eaba"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"ownerAddress","type":"address"}],"name":"copyPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0xfd593501"},{"inputs":[],"name":"defaultCareer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x50082120"},{"inputs":[],"name":"gasLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf68016b7"},{"inputs":[{"internalType":"uint256","name":"careerIndex","type":"uint256"}],"name":"getAccCareer","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xbe40c2b2"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCareerAddrs","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf3d33aac"},{"inputs":[],"name":"getCareerAddrsLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3035c5bc"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getLevelUpConfig","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc9ec2875"},{"inputs":[],"name":"getNew","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x6ad37d46"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getPlayerInfoBySet","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x305041d0"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserRight","outputs":[{"internalType":"uint256[2]","name":"","type":"uint256[2]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7b12ad11"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[],"name":"intervalTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xfd3c9144"},{"inputs":[{"internalType":"address","name":"careerAddr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"killPlayer","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd77f91c7"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"_coin","type":"uint256"},{"internalType":"uint256","name":"_paycoin","type":"uint256"}],"name":"levelUp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xc45a7374"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelUpConfig","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9679b5ba"},{"inputs":[],"name":"maxGetNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x27b64f87"},{"inputs":[],"name":"maxLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcc06c359"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"salt","type":"uint256"}],"name":"newPlayerFree","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0xe4e80aab"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"request","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"}],"name":"newPlayerP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0x1f214e9e"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"bnxvalue","type":"uint256"},{"internalType":"uint256","name":"request","type":"uint256"}],"name":"newPlayerTrade","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true,"signature":"0x172d60ff"},{"inputs":[],"name":"oldPlayInfo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xde044ef7"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5c975abb"},{"inputs":[],"name":"payAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf9fcfe5c"},{"inputs":[],"name":"payBnxAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x543ae126"},{"inputs":[],"name":"payBnxValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6a4d832b"},{"inputs":[],"name":"payValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7649a2f2"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerReqs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x901ec2b2"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"playerReqsToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xb965c198"},{"inputs":[],"name":"receiveAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3455a9db"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"reqsPlayerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x07991490"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"uint256[]","name":"accParam","type":"uint256[]"},{"internalType":"uint256","name":"careerIndex","type":"uint256"}],"name":"setAccCareer","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x15eca7bf"},{"inputs":[{"internalType":"uint256","name":"_bnbValue","type":"uint256"}],"name":"setBnbValue","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x40e3830a"},{"inputs":[{"internalType":"address","name":"career","type":"address"},{"internalType":"uint256[]","name":"configs","type":"uint256[]"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x1a774bfb"},{"inputs":[{"internalType":"uint256","name":"_defaultCareer","type":"uint256"}],"name":"setDefaultCareer","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x9028a548"},{"inputs":[{"internalType":"uint256","name":"_gasLimit","type":"uint256"}],"name":"setGasLimit","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xee7d72b4"},{"inputs":[{"internalType":"uint256","name":"_intervalTime","type":"uint256"}],"name":"setIntervalTime","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0d63e87d"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256[]","name":"configs","type":"uint256[]"}],"name":"setLevelUpConfig","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x9fa91cce"},{"inputs":[{"internalType":"uint256","name":"_maxGetNum","type":"uint256"}],"name":"setMaxGetNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc706b4eb"},{"inputs":[{"internalType":"uint256","name":"_maxLevel","type":"uint256"}],"name":"setMaxLevel","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x344f1ba5"},{"inputs":[{"internalType":"address","name":"_oldPlayInfo","type":"address"}],"name":"setOldPlayInfo","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x66bb4c41"},{"inputs":[],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x37a66d85"},{"inputs":[{"internalType":"address","name":"_pay","type":"address"}],"name":"setPayAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x60d1b489"},{"inputs":[{"internalType":"uint256","name":"_payvalue","type":"uint256"}],"name":"setPayValue","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xe7cd510c"},{"inputs":[{"internalType":"address","name":"_receiveAddr","type":"address"}],"name":"setReceiveAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa58696cd"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3e0a322d"},{"inputs":[],"name":"setUnPaused","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x349fdb09"},{"inputs":[{"internalType":"address","name":"_payBnxAddr","type":"address"}],"name":"setpayBnxAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdfc22dd7"},{"inputs":[{"internalType":"uint256","name":"_payBnxValue","type":"uint256"}],"name":"setpayBnxValue","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x9e6c5cc0"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x78e97925"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}]')
    }, 7: function (e, t) {
    }, 7220: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"_baseUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9abc8320"},{"inputs":[{"internalType":"uint256","name":"_playerId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x42966c68"},{"inputs":[{"internalType":"address","name":"player","type":"address"}],"name":"createPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0xe8ace5d7"},{"inputs":[{"internalType":"uint256","name":"_playerId","type":"uint256"}],"name":"exist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4ebbc92a"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x081812fc"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe985e9c5"},{"inputs":[{"internalType":"uint256","name":"_playerId","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"isApprovedOrOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf6c4c9c1"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"inputs":[{"internalType":"string","name":"uri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa0bcfc7f"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4f6ccce7"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2f745c59"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc87b56dd"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}]')
    }, "8bbf": function (e, t) {
        e.exports = Vue
    }, "98f0": function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"getCareerIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"address","name":"playinfo","type":"address"}],"name":"getTokenCareerInfos","outputs":[{"components":[{"internalType":"uint256[]","name":"cardInfo","type":"uint256[]"},{"internalType":"address","name":"careerAddr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"internalType":"struct BnxHelper.CardInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"address","name":"playinfo","type":"address"},{"internalType":"address","name":"miningAddr","type":"address"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"getWorkCareerInfos","outputs":[{"components":[{"internalType":"uint256[]","name":"blocks","type":"uint256[]"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"address","name":"workType","type":"address"},{"internalType":"uint256[]","name":"cardInfo","type":"uint256[]"},{"internalType":"address","name":"careerAddr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"}],"internalType":"struct BnxHelper.HelperRole[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}]')
    }, b3bf: function (e, t, n) {
    }, def1: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_coinAddr","type":"address"},{"internalType":"address","name":"_playerInfoAddr","type":"address"},{"internalType":"address","name":"linggong","type":"address"},{"internalType":"address","name":"datie","type":"address"},{"internalType":"address","name":"bulie","type":"address"},{"internalType":"address","name":"tushu","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"inputs":[{"internalType":"address","name":"workType","type":"address"}],"name":"addWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2f0dca8e"},{"inputs":[{"internalType":"address","name":"workType","type":"address"}],"name":"delWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3920257a"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAward","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x05989e9d"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workType","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"income","type":"uint256"}],"name":"GetAward","type":"event","signature":"0xfd5cdc0d4f7f1700cae56db0b1085b93b5128e5f6049319bdeadf08b30d53c59"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"quitWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x733593d2"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workType","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"QuitWork","type":"event","signature":"0x5514c8661203d5dd0ff658ba1102a824e04c0fd2ed82a2b0fdef0ac02dfb5b65"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"address","name":"_coinAddr","type":"address"}],"name":"setCoinAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x406444db"},{"inputs":[{"internalType":"address","name":"_playerInfoAddr","type":"address"}],"name":"setPlayerInfoAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdb53552b"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"address","name":"workType","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"work","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x25b6488b"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workType","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"}],"name":"Work","type":"event","signature":"0x05d28bd94112a2b7aaf493c272597e6cb99769f6a589a1b934db90a7ad5ba025"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"coinAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf5aa3420"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAwardInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa88c989a"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getPlayerWork","outputs":[{"components":[{"internalType":"address","name":"workType","type":"address"},{"internalType":"address","name":"careerAddr","type":"address"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256[]","name":"blocks","type":"uint256[]"}],"internalType":"struct Mining.PlayerWork","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd2abe50"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getWorkType","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf45567f7"},{"inputs":[],"name":"getWorkTypeLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4a19a9ea"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[],"name":"playerInfoAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8115ad5d"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2f745c59"}]')
    }
});