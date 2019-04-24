!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.canvasDatagrid = t() : e.canvasDatagrid = t()
}("undefined" != typeof self ? self : this, function () {
    var ishidden = [];
    return function (e) {
        function t(r) {
            if (o[r]) return o[r].exports;
            var n = o[r] = {i: r, l: !1, exports: {}};
            return e[r].call(n.exports, n, n.exports, t), n.l = !0, n.exports
        }

        var o = {};
        return t.m = e, t.c = o, t.d = function (e, o, r) {
            t.o(e, o) || Object.defineProperty(e, o, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var o = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(o, "a", o), o
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 1)
    }([function (e, t, o) {
        var r, n;
        r = [], void 0 !== (n = function () {
            "use strict";
            return function (e) {
                e.defaults = {
                    attributes: [["allowColumnReordering", !0], ["allowColumnResize", !0], ["allowColumnResizeFromCell", !1], ["allowFreezingRows", !1], ["allowFreezingColumns", !1], ["allowMovingSelection", !0], ["allowRowHeaderResize", !0], ["allowRowReordering", !1], ["allowRowResize", !0], ["allowRowResizeFromCell", !1], ["allowSorting", !0], ["autoGenerateSchema", !1], ["autoResizeColumns", !1], ["borderDragBehavior", "none"], ["borderResizeZone", 10], ["clearSettingsOptionText", ""], ["columnHeaderClickBehavior", "!sort"], ["columnSelectorHiddenText", "○"], ["columnSelectorText", "添加/删除列"], ["columnSelectorVisibleText", "●"], ["contextHoverScrollAmount", 2], ["contextHoverScrollRateMs", 5], ["copyHeadersOnSelectAll", !0], ["copyText", "Copy"], ["debug", !1], ["editable", !0], ["ellipsisText", "..."], ["filterOptionText", "筛选 %s"], ["filterTextPrefix", ""], ["globalRowResize", !1], ["hideColumnText", "隐藏 %s"], ["maxAutoCompleteItems", 200], ["multiLine", !1], ["name", ""], ["pageUpDownOverlap", 1], ["pasteText", "Paste"], ["persistantSelectionMode", !1], ["removeFilterOptionText", "删除在 %s 上的筛选"], ["reorderDeadZone", 3], ["resizeScrollZone", 20], ["rowGrabZoneSize", 5], ["saveAppearance", !0], ["scrollAnimationPPSThreshold", .75], ["scrollPointerLock", !1], ["scrollRepeatRate", 75], ["selectionFollowsActiveCell", !1], ["selectionHandleBehavior", "none"], ["selectionMode", "cell"], ["selectionScrollIncrement", 20], ["selectionScrollZone", 20], ["showClearSettingsOption", !0], ["showColumnHeaders", !0], ["showColumnSelector", !0], ["showCopy", !1], ["showFilter", !0], ["showNewRow", !1], ["showOrderByOption", !0], ["showOrderByOptionTextAsc", "按 %s 升序排列"], ["showOrderByOptionTextDesc", "按 %s 降序排列"], ["showPaste", !1], ["showPerformance", !1], ["showRowHeaders", !0], ["showRowNumbers", !0], ["snapToRow", !1], ["touchContextMenuTimeMs", 800], ["touchDeadZone", 3], ["touchEasingMethod", "easeOutQuad"], ["touchReleaseAcceleration", 1e3], ["touchReleaseAnimationDurationMs", 2e3], ["touchScrollZone", 20], ["touchSelectHandleZone", 20], ["touchZoomSensitivity", .005], ["touchZoomMin", .5], ["touchZoomMax", 1.75], ["maxPixelRatio", 2], ["tree", !1], ["treeHorizontalScroll", !1]],
                    styles: [["activeCellBackgroundColor", "rgba(255, 255, 255, 1)"], ["activeCellBorderColor", "rgba(110, 168, 255, 1)"], ["activeCellBorderWidth", 1], ["activeCellColor", "rgba(0, 0, 0, 1)"], ["activeCellFont", "16px sans-serif"], ["activeCellHoverBackgroundColor", "rgba(255, 255, 255, 1)"], ["activeCellHorizontalAlignment", "left"], ["activeCellHoverColor", "rgba(0, 0, 0, 1)"], ["activeCellOverlayBorderColor", "rgba(66, 133, 244, 1)"], ["activeCellOverlayBorderWidth", 1], ["activeCellPaddingBottom", 5], ["activeCellPaddingLeft", 5], ["activeCellPaddingRight", 5], ["activeCellPaddingTop", 5], ["activeCellSelectedBackgroundColor", "rgba(236, 243, 255, 1)"], ["activeCellSelectedColor", "rgba(0, 0, 0, 1)"], ["activeCellVerticalAlignment", "center"], ["activeColumnHeaderCellBackgroundColor", "rgba(225, 225, 225, 1)"], ["activeColumnHeaderCellColor", "rgba(0, 0, 0, 1)"], ["activeRowHeaderCellBackgroundColor", "rgba(225, 225, 225, 1)"], ["activeRowHeaderCellColor", "rgba(0, 0, 0, 1)"], ["autocompleteBottomMargin", 60], ["autosizeHeaderCellPadding", 8], ["autosizePadding", 5], ["cellAutoResizePadding", 13], ["cellBackgroundColor", "rgba(255, 255, 255, 1)"], ["cellBorderColor", "rgba(195, 199, 202, 1)"], ["cellBorderWidth", 1], ["cellColor", "rgba(0, 0, 0, 1)"], ["cellFont", "16px sans-serif"], ["cellGridHeight", 250], ["cellHeight", 24], ["cellHeightWithChildGrid", 150], ["cellHorizontalAlignment", "left"], ["cellHoverBackgroundColor", "rgba(255, 255, 255, 1)"], ["cellHoverColor", "rgba(0, 0, 0, 1)"], ["cellPaddingBottom", 5], ["cellPaddingLeft", 5], ["cellPaddingRight", 5], ["cellPaddingTop", 5], ["cellSelectedBackgroundColor", "rgba(236, 243, 255, 1)"], ["cellSelectedColor", "rgba(0, 0, 0, 1)"], ["cellVerticalAlignment", "center"], ["cellWidth", 250], ["cellWidthWithChildGrid", 250], ["cellWhiteSpace", "nowrap"], ["cellLineHeight", 1], ["cellLineSpacing", 3], ["childContextMenuArrowColor", "rgba(43, 48, 43, 1)"], ["childContextMenuArrowHTML", "▶"], ["childContextMenuMarginLeft", -11], ["childContextMenuMarginTop", -6], ["columnHeaderCellBackgroundColor", "rgba(240, 240, 240, 1)"], ["columnHeaderCellBorderColor", "rgba(172, 172, 172, 1)"], ["columnHeaderCellBorderWidth", 1], ["columnHeaderCellCapBackgroundColor", "rgba(240, 240, 240, 1)"], ["columnHeaderCellCapBorderColor", "rgba(172, 172, 172, 1)"], ["columnHeaderCellCapBorderWidth", 1], ["columnHeaderCellColor", "rgba(50, 50, 50, 1)"], ["columnHeaderCellFont", "16px sans-serif"], ["columnHeaderCellHeight", 25], ["columnHeaderCellHorizontalAlignment", "left"], ["columnHeaderCellHoverBackgroundColor", "rgba(235, 235, 235, 1)"], ["columnHeaderCellHoverColor", "rgba(0, 0, 0, 1)"], ["columnHeaderCellPaddingBottom", 5], ["columnHeaderCellPaddingLeft", 5], ["columnHeaderCellPaddingRight", 5], ["columnHeaderCellPaddingTop", 5], ["columnHeaderCellVerticalAlignment", "center"], ["columnHeaderOrderByArrowBorderColor", "rgba(195, 199, 202, 1)"], ["columnHeaderOrderByArrowBorderWidth", 1], ["columnHeaderOrderByArrowColor", "rgba(155, 155, 155, 1)"], ["columnHeaderOrderByArrowHeight", 8], ["columnHeaderOrderByArrowMarginLeft", 0], ["columnHeaderOrderByArrowMarginRight", 5], ["columnHeaderOrderByArrowMarginTop", 6], ["columnHeaderOrderByArrowWidth", 13], ["contextFilterButtonBorder", "solid 1px rgba(158, 163, 169, 1)"], ["contextFilterButtonBorderRadius", "3px"], ["contextFilterButtonHTML", "▼"], ["contextFilterInputBackground", "rgba(255,255,255,1)"], ["contextFilterInputBorder", "solid 1px rgba(158, 163, 169, 1)"], ["contextFilterInputBorderRadius", "0"], ["contextFilterInputColor", "rgba(0,0,0,1)"], ["contextFilterInputFontFamily", "sans-serif"], ["contextFilterInputFontSize", "14px"], ["contextFilterInvalidRegExpBackground", "rgba(180, 6, 1, 1)"], ["contextFilterInvalidRegExpColor", "rgba(255, 255, 255, 1)"], ["contextMenuArrowColor", "rgba(43, 48, 43, 1)"], ["contextMenuArrowDownHTML", "▼"], ["contextMenuArrowUpHTML", "▲"], ["contextMenuBackground", "rgba(240, 240, 240, 1)"], ["contextMenuBorder", "solid 1px rgba(158, 163, 169, 1)"], ["contextMenuBorderRadius", "3px"], ["contextMenuChildArrowFontSize", "12px"], ["contextMenuColor", "rgba(43, 48, 43, 1)"], ["contextMenuCursor", "default"], ["contextMenuFilterButtonFontFamily", "sans-serif"], ["contextMenuFilterButtonFontSize", "10px"], ["contextMenuFilterInvalidExpresion", "rgba(237, 155, 156, 1)"], ["contextMenuFontFamily", "sans-serif"], ["contextMenuFontSize", "16px"], ["contextMenuHoverBackground", "rgba(182, 205, 250, 1)"], ["contextMenuHoverColor", "rgba(43, 48, 153, 1)"], ["contextMenuItemBorderRadius", "3px"], ["contextMenuItemMargin", "2px"], ["contextMenuLabelDisplay", "inline-block"], ["contextMenuLabelMargin", "0 3px 0 0"], ["contextMenuLabelMaxWidth", "700px"], ["contextMenuLabelMinWidth", "0px"], ["contextMenuMarginLeft", 3], ["contextMenuMarginTop", -3], ["contextMenuOpacity", "0.98"], ["contextMenuPadding", "2px"], ["contextMenuWindowMargin", 30], ["contextMenuZIndex", 1e4], ["cornerCellBackgroundColor", "rgba(240, 240, 240, 1)"], ["cornerCellBorderColor", "rgba(202, 202, 202, 1)"], ["debugBackgroundColor", "rgba(0, 0, 0, .0)"], ["debugColor", "rgba(255, 15, 24, 1)"], ["debugEntitiesColor", "rgba(76, 231, 239, 1.00)"], ["debugFont", "11px sans-serif"], ["debugPerfChartBackground", "rgba(29, 25, 26, 1.00)"], ["debugPerfChartTextColor", "rgba(255, 255, 255, 0.8)"], ["debugPerformanceColor", "rgba(252, 255, 37, 1.00)"], ["debugScrollHeightColor", "rgba(248, 33, 103, 1.00)"], ["debugScrollWidthColor", "rgba(66, 255, 27, 1.00)"], ["debugTouchPPSXColor", "rgba(246, 102, 24, 1.00)"], ["debugTouchPPSYColor", "rgba(186, 0, 255, 1.00)"], ["display", "inline-block"], ["editCellBackgroundColor", "white"], ["editCellBorder", "solid 1px rgba(110, 168, 255, 1)"], ["editCellBoxShadow", "0 2px 5px rgba(0,0,0,0.4)"], ["editCellColor", "black"], ["editCellFontFamily", "sans-serif"], ["editCellFontSize", "16px"], ["editCellPaddingLeft", 4], ["editCellZIndex", 1e4], ["frozenMarkerHoverColor", "rgba(236, 243, 255, 1)"], ["frozenMarkerHoverBorderColor", "rgba(110, 168, 255, 1)"], ["frozenMarkerActiveColor", "rgba(236, 243, 255, 1)"], ["frozenMarkerActiveBorderColor", "rgba(110, 168, 255, 1)"], ["frozenMarkerColor", "rgba(222, 222, 222, 1)"], ["frozenMarkerBorderColor", "rgba(168, 168, 168, 1)"], ["frozenMarkerBorderWidth", 1], ["frozenMarkerWidth", 2], ["gridBackgroundColor", "rgba(240, 240, 240, 1)"], ["gridBorderCollapse", "collapse"], ["gridBorderColor", "rgba(202, 202, 202, 1)"], ["gridBorderWidth", 1], ["height", "auto"], ["maxHeight", "inherit"], ["maxWidth", "inherit"], ["minColumnWidth", 45], ["minHeight", "inherit"], ["minRowHeight", 24], ["minWidth", "inherit"], ["mobileContextMenuMargin", 10], ["mobileEditInputHeight", 30], ["mobileEditFontFamily", "sans-serif"], ["mobileEditFontSize", "16px"], ["moveOverlayBorderWidth", 1], ["moveOverlayBorderColor", "rgba(66, 133, 244, 1)"], ["moveOverlayBorderSegments", "12, 7"], ["name", "default"], ["overflowY", "auto"], ["overflowX", "auto"], ["reorderMarkerBackgroundColor", "rgba(0, 0, 0, 0.1)"], ["reorderMarkerBorderColor", "rgba(0, 0, 0, 0.2)"], ["reorderMarkerBorderWidth", 1.25], ["reorderMarkerIndexBorderColor", "rgba(66, 133, 244, 1)"], ["reorderMarkerIndexBorderWidth", 2.75], ["rowHeaderCellBackgroundColor", "rgba(240, 240, 240, 1)"], ["rowHeaderCellBorderColor", "rgba(200, 200, 200, 1)"], ["rowHeaderCellBorderWidth", 1], ["rowHeaderCellColor", "rgba(50, 50, 50, 1)"], ["rowHeaderCellFont", "16px sans-serif"], ["rowHeaderCellHeight", 25], ["rowHeaderCellHorizontalAlignment", "left"], ["rowHeaderCellHoverBackgroundColor", "rgba(235, 235, 235, 1)"], ["rowHeaderCellHoverColor", "rgba(0, 0, 0, 1)"], ["rowHeaderCellPaddingBottom", 5], ["rowHeaderCellPaddingLeft", 5], ["rowHeaderCellPaddingRight", 5], ["rowHeaderCellPaddingTop", 5], ["rowHeaderCellSelectedBackgroundColor", "rgba(217, 217, 217, 1)"], ["rowHeaderCellSelectedColor", "rgba(50, 50, 50, 1)"], ["rowHeaderCellVerticalAlignment", "center"], ["rowHeaderCellWidth", 57], ["scrollBarActiveColor", "rgba(125, 125, 125, 1)"], ["scrollBarBackgroundColor", "rgba(240, 240, 240, 1)"], ["scrollBarBorderColor", "rgba(202, 202, 202, 1)"], ["scrollBarBorderWidth", .5], ["scrollBarBoxBorderRadius", 4.125], ["scrollBarBoxColor", "rgba(192, 192, 192, 1)"], ["scrollBarBoxMargin", 2], ["scrollBarBoxMinSize", 15], ["scrollBarBoxWidth", 8], ["scrollBarCornerBackgroundColor", "rgba(240, 240, 240, 1)"], ["scrollBarCornerBorderColor", "rgba(202, 202, 202, 1)"], ["scrollBarWidth", 11], ["selectionHandleBorderColor", "rgba(255, 255, 255, 1)"], ["selectionHandleBorderWidth", 1.5], ["selectionHandleColor", "rgba(66, 133, 244, 1)"], ["selectionHandleSize", 8], ["selectionHandleType", "square"], ["selectionOverlayBorderColor", "rgba(66, 133, 244, 1)"], ["selectionOverlayBorderWidth", 1], ["treeArrowBorderColor", "rgba(195, 199, 202, 1)"], ["treeArrowBorderWidth", 1], ["treeArrowClickRadius", 5], ["treeArrowColor", "rgba(155, 155, 155, 1)"], ["treeArrowHeight", 8], ["treeArrowMarginLeft", 0], ["treeArrowMarginRight", 5], ["treeArrowMarginTop", 6], ["treeArrowWidth", 13], ["treeGridHeight", 250], ["width", "auto"]]
                }
            }
        }.apply(t, r)) && (e.exports = n)
    }, function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(0), __webpack_require__(3), __webpack_require__(4), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7), __webpack_require__(8), __webpack_require__(9)], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function context(component) {
            "use strict";

            function Grid(args) {
                args = args || {};
                var self = {};
                return self.isComponent = void 0 === args.component, self.isChildGrid = args.parentNode && /canvas-datagrid-(cell|tree)/.test(args.parentNode.nodeType), self.isChildGrid ? self.intf = {} : self.intf = self.isComponent ? eval("Reflect.construct(HTMLElement, [], new.target)") : document.createElement("canvas"), self.args = args, self.intf.args = args, self.applyComponentStyle = component.applyComponentStyle, self.hyphenateProperty = component.hyphenateProperty, self.dehyphenateProperty = component.dehyphenateProperty, self.createGrid = function (e) {
                    return e.component = !1, new Grid(e)
                }, modules.forEach(function (e) {
                    e(self)
                }), self.isChildGrid ? (self.shadowRoot = args.parentNode.shadowRoot, self.parentNode = args.parentNode) : self.intf.createShadowRoot ? (self.shadowRoot = self.intf.attachShadow({mode: "open"}), self.parentNode = self.shadowRoot) : self.parentNode = self.intf, self.init(), self.intf
            }

            component = component();
            var modules = Array.prototype.slice.call(arguments);
            return window.HTMLElement && (Grid.prototype = Object.create(window.HTMLElement.prototype)), window.customElements && (Grid.observedAttributes = component.getObservableAttributes(), Grid.prototype.disconnectedCallback = component.disconnectedCallback, Grid.prototype.attributeChangedCallback = component.attributeChangedCallback, Grid.prototype.connectedCallback = component.connectedCallback, Grid.prototype.adoptedCallback = component.adoptedCallback, window.customElements.define("canvas-datagrid", Grid)), !window || window.canvasDatagrid || window.require || (window.canvasDatagrid = function (e) {
                return new Grid(e)
            }), module.exports = function (e) {
                e = e || {};
                var t,
                    o = ["style", "formatters", "sorters", "filters", "treeGridAttributes", "cellGridAttributes", "data", "schema"];
                return window.customElements && document.body.createShadowRoot ? (t = document.createElement("canvas-datagrid"), Object.keys(e).forEach(function (r) {
                    if ("data" !== r && "parentNode" !== r) return -1 !== o.indexOf(r) ? void o.forEach(function (o) {
                        void 0 !== e[o] && o === r && (-1 !== ["formatters", "sorters", "filters"].indexOf(r) ? "object" == typeof e[o] && null !== e[o] && Object.keys(e[o]).forEach(function (r) {
                            t[o][r] = e[o][r]
                        }) : t[o] = e[o])
                    }) : void(t.attributes[r] = e[r])
                }), e.data && (t.data = e.data), e.parentNode && e.parentNode.appendChild(t), t) : (e.component = !1, t = new Grid(e), e.parentNode && e.parentNode.appendChild && e.parentNode.appendChild(t), t)
            }, module.exports
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }, function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function (defaults) {
            "use strict";
            return function () {
                function getDefaultItem(e, t) {
                    var o = {};
                    return defaults(o), o.defaults[e].filter(function (e) {
                        return e[0].toLowerCase() === t.toLowerCase() || component.hyphenateProperty(e[0]) === t.toLowerCase() || component.hyphenateProperty(e[0], !0) === t.toLowerCase()
                    })[0]
                }

                var typeMap, component = {};
                return component.dehyphenateProperty = function (e) {
                    e = e.replace("--cdg-", "");
                    var t, o = "";
                    return Array.prototype.forEach.call(e, function (e) {
                        return t ? (t = !1, void(o += e.toUpperCase())) : "-" === e ? void(t = !0) : void(o += e)
                    }), o
                }, component.hyphenateProperty = function (e, t) {
                    var o = "";
                    return Array.prototype.forEach.call(e, function (e) {
                        if (e === e.toUpperCase()) return void(o += "-" + e.toLowerCase());
                        o += e
                    }), (t ? "--cdg-" : "") + o
                }, component.applyComponentStyle = function (e, t) {
                    if (t.isComponent) {
                        var o = window.getComputedStyle("CANVAS-DATAGRID" === t.tagName ? t : t.canvas, null), r = {};
                        t.computedStyle = o, defaults(r), r = r.defaults.styles, r.forEach(function (e) {
                            var r;
                            r = o.getPropertyValue(component.hyphenateProperty(e[0], !0)), "" === r && (r = o.getPropertyValue(component.hyphenateProperty(e[0], !1))), "" !== r && "string" == typeof r && t.setStyleProperty(e[0], typeMap[typeof e[1]](r.replace(/^\s+/, "").replace(/\s+$/, ""), e[1]), !0)
                        }), !e && t.dispatchEvent && (requestAnimationFrame(function () {
                            t.resize(!0)
                        }), t.dispatchEvent("stylechanged", t.style))
                    }
                }, typeMap = {
                    data: function (e) {
                        try {
                            return JSON.parse(e)
                        } catch (e) {
                            throw new Error("Cannot read JSON data in canvas-datagrid data.")
                        }
                    }, schema: function (e) {
                        try {
                            return JSON.parse(e)
                        } catch (e) {
                            throw new Error("Cannot read JSON data in canvas-datagrid schema attribute.")
                        }
                    }, number: function (e, t) {
                        var o = parseInt(e, 10);
                        return isNaN(o) ? t : o
                    }, boolean: function (e) {
                        return /true/i.test(e)
                    }, string: function (e) {
                        return e
                    }
                }, component.getObservableAttributes = function () {
                    var e = {}, t = ["data", "schema", "style", "className", "name"];
                    return defaults(e), e.defaults.attributes.forEach(function (e) {
                        t.push(e[0].toLowerCase())
                    }), t
                }, component.disconnectedCallback = function () {
                    this.connected = !1
                }, component.connectedCallback = function () {
                    var e = this;
                    e.parentDOMNode.innerHTML = "", e.parentDOMNode.appendChild(e.canvas), e.connected = !0, component.observe(e), component.applyComponentStyle(!0, e), e.resize(!0)
                }, component.adoptedCallback = function () {
                    this.resize()
                }, component.attributeChangedCallback = function (attrName, oldVal, newVal) {
                    var tfn, intf = this, def;
                    if ("style" === attrName) return void component.applyComponentStyle(!1, intf);
                    if ("data" === attrName) return "application/x-canvas-datagrid" === intf.dataType && (intf.dataType = "application/json+x-canvas-datagrid"), void(intf.args.data = newVal);
                    if ("schema" === attrName) return void(intf.args.schema = typeMap.schema(newVal));
                    if ("name" === attrName) return void(intf.name = newVal);
                    if ("class" !== attrName && "className" !== attrName) {
                        if (def = getDefaultItem("attributes", attrName)) return tfn = typeMap[typeof def[1]], void(intf.attributes[def[0]] = tfn(newVal));
                        /^on/.test(attrName) && intf.addEventListener("on" + attrName, function (e) {
                            eval(newVal)
                        })
                    }
                }, component.observe = function (e) {
                    var t;
                    window.MutationObserver && (e.applyComponentStyle = function () {
                        component.applyComponentStyle(!1, e), e.resize()
                    }, t = new window.MutationObserver(function (t) {
                        var o, r;
                        Array.prototype.forEach.call(t, function (e) {
                            return "class" === e.attributeName || "style" === e.attributeName ? void(r = !0) : e.target.parentNode && "STYLE" === e.target.parentNode.nodeName ? void(r = !0) : void((e.addedNodes.length > 0 || "characterData" === e.type) && (o = !0))
                        }), r && e.applyComponentStyle(!1, e), o && ("application/x-canvas-datagrid" === e.dataType && (e.dataType = "application/json+x-canvas-datagrid"), e.data = e.innerHTML)
                    }), t.observe(e, {
                        characterData: !0,
                        childList: !0,
                        attributes: !0,
                        subtree: !0
                    }), Array.prototype.forEach.call(document.querySelectorAll("style"), function (e) {
                        t.observe(e, {characterData: !0, childList: !0, attributes: !0, subtree: !0})
                    }))
                }, component
            }
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }, function (e, t, o) {
        var r, n;
        r = [], void 0 !== (n = function () {
            "use strict";
            return function (e) {
                function t(e, t, o, r) {
                    o = o || 1;
                    var n, l = [];
                    for (n = e; n <= t; n += o) l[n] = void 0 === r ? n : "function" == typeof r ? r(n) : r;
                    return l
                }

                function o(t, o, r, n, l, i, a, s, c) {
                    var d = t / l.length, u = o / a;
                    r += e.canvasOffsetLeft, n += e.canvasOffsetTop, e.ctx.beginPath(), e.ctx.moveTo(r, n + o), l.forEach(function (t) {
                        var l, a, s = void 0 === i ? t : t[i];
                        c && (s = Math.abs(s)), l = r + d, a = n + o - s * u, e.ctx.lineTo(l, a), r += d
                    }), e.ctx.moveTo(r + t, n + o), e.ctx.strokeStyle = s, e.ctx.stroke()
                }

                function r() {
                    var t = !0;
                    Object.keys(e.htmlImageCache).forEach(function (o) {
                        e.htmlImageCache[o].complete || (t = !1)
                    }), t && !C && (C = !0, e.draw())
                }

                function n(t) {
                    var o, n = t.innerHTML || t.formattedValue,
                        l = n.toString() + t.rowIndex.toString() + t.columnIndex.toString(),
                        i = t.x + e.canvasOffsetLeft, a = t.y + e.canvasOffsetTop;
                    if (e.htmlImageCache[l]) {
                        if (o = e.htmlImageCache[l], o.height === t.height && o.width === t.width) {
                            if (!o.complete) return;
                            return e.ctx.drawImage(o, i, a)
                        }
                        e.htmlImageCache[l] = void 0
                    } else C = !1;
                    o = new Image(t.width, t.height), e.htmlImageCache[l] = o, o.onload = function () {
                        e.ctx.drawImage(o, i, a), r()
                    }, o.src = "data:image/svg+xml;base64," + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="' + t.width + '" height="' + t.height + '">\n<foreignObject class="node" x="0" y="0" width="100%" height="100%">\n<body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0;">\n' + n + "\n</body></foreignObject>\n</svg>\n")
                }

                function l(t, o) {
                    var r = e.style.columnHeaderOrderByArrowMarginTop * e.scale,
                        n = e.style.columnHeaderOrderByArrowMarginLeft * e.scale,
                        l = e.style.columnHeaderOrderByArrowMarginRight * e.scale,
                        i = e.style.columnHeaderOrderByArrowWidth * e.scale,
                        a = e.style.columnHeaderOrderByArrowHeight * e.scale;
                    return t += e.canvasOffsetLeft, o += e.canvasOffsetTop, e.ctx.fillStyle = e.style.columnHeaderOrderByArrowColor, e.ctx.strokeStyle = e.style.columnHeaderOrderByArrowBorderColor, e.ctx.beginPath(), t += n, o += r, "asc" === e.orderDirection ? (e.ctx.moveTo(t, o), e.ctx.lineTo(t + i, o), e.ctx.lineTo(t + .5 * i, o + a), e.ctx.moveTo(t, o)) : (e.ctx.lineTo(t, o + a), e.ctx.lineTo(t + i, o + a), e.ctx.lineTo(t + .5 * i, o), e.ctx.lineTo(t, o + a)), e.ctx.stroke(), e.ctx.fill(), n + i + l
                }

                function i(t, o, r) {
                    var n = e.style.treeArrowMarginTop * e.scale, l = e.style.treeArrowMarginRight * e.scale,
                        i = e.style.treeArrowMarginLeft * e.scale, a = e.style.treeArrowWidth * e.scale,
                        s = e.style.treeArrowHeight * e.scale;
                    return o += e.canvasOffsetLeft, r += e.canvasOffsetTop, e.ctx.fillStyle = e.style.treeArrowColor, e.ctx.strokeStyle = e.style.treeArrowBorderColor, e.ctx.beginPath(), o += i, r += n, e.openChildren[t.rowIndex] ? (e.ctx.moveTo(o, r), e.ctx.lineTo(o + a, r), e.ctx.lineTo(o + .5 * a, r + s), e.ctx.moveTo(o, r)) : (e.ctx.lineTo(o, r), e.ctx.lineTo(o + s, r + .5 * a), e.ctx.lineTo(o, r + a), e.ctx.lineTo(o, r)), e.ctx.stroke(), e.ctx.fill(), i + a + l
                }

                function a(t, o, r, n, l) {
                    t += e.canvasOffsetLeft, o += e.canvasOffsetTop;
                    var i = t + r, a = o + n;
                    e.ctx.beginPath(), e.ctx.moveTo(t + l, o), e.ctx.lineTo(i - l, o), e.ctx.quadraticCurveTo(i, o, i, o + l), e.ctx.lineTo(i, o + n - l), e.ctx.quadraticCurveTo(i, a, i - l, a), e.ctx.lineTo(t + l, a), e.ctx.quadraticCurveTo(t, a, t, a - l), e.ctx.lineTo(t, o + l), e.ctx.quadraticCurveTo(t, o, t + l, o)
                }

                function s(t, o, r, n) {
                    t += e.canvasOffsetLeft, o += e.canvasOffsetTop, e.ctx.fillRect(t, o, r, n)
                }

                function c(t, o, r, n) {
                    t += e.canvasOffsetLeft, o += e.canvasOffsetTop, e.ctx.strokeRect(t, o, r, n)
                }

                function d(t, o, r) {
                    o += e.canvasOffsetLeft, r += e.canvasOffsetTop, e.ctx.fillText(t, o, r)
                }

                function u(t, o, r) {
                    t += e.canvasOffsetLeft, o += e.canvasOffsetTop, e.ctx.beginPath(), e.ctx.arc(t, o, r, 0, 2 * Math.PI), e.ctx.fill()
                }

                function h(t, o, r) {
                    t += e.canvasOffsetLeft, o += e.canvasOffsetTop, e.ctx.beginPath(), e.ctx.arc(t, o, r, 0, 2 * Math.PI), e.ctx.stroke()
                }

                function f(t) {
                    e.ctx.beginPath(), 0 === t && (e.ctx.moveTo(e.lastFrozenColumnPixel, e.lastFrozenRowPixel), e.ctx.lineTo(e.lastFrozenColumnPixel, e.height), e.ctx.lineTo(e.width, e.height), e.ctx.lineTo(e.width, e.lastFrozenRowPixel)), 1 === t && (e.ctx.moveTo(0, e.lastFrozenRowPixel), e.ctx.lineTo(0, e.height), e.ctx.lineTo(e.width, e.height), e.ctx.lineTo(e.width, e.lastFrozenRowPixel)), 2 === t && (e.ctx.moveTo(e.lastFrozenColumnPixel, 0), e.ctx.lineTo(e.width, 0), e.ctx.lineTo(e.width, e.height), e.ctx.lineTo(e.lastFrozenColumnPixel, e.height)), e.ctx.clip()
                }

                function g(t, o, r) {
                    if ("circle" === e.style.selectionHandleType) return u(t, o, .5 * r);
                    s(t - .5 * r, o - .5 * r, r, r)
                }

                function m(t, o, r) {
                    if ("circle" === e.style.selectionHandleType) return h(t, o, .5 * r);
                    c(t - .5 * r, o - .5 * r, r, r)
                }

                function x(t, o) {
                    var r = e.style.selectionHandleSize;
                    ({
                        tr: function () {
                            g(t.x + t.width, t.y, r), m(t.x + t.width, t.y, r)
                        }, br: function () {
                            g(t.x + t.width, t.y + t.height, r), m(t.x + t.width, t.y + t.height, r)
                        }, tl: function () {
                            g(t.x, t.y, r), m(t.x, t.y, r)
                        }, bl: function () {
                            g(t.x, t.y + t.height, r), m(t.x, t.y + t.height, r)
                        }
                    })[o]()
                }

                function p(t, o) {
                    e.ctx.beginPath(), {
                        t: function () {
                            e.ctx.moveTo(t.x + e.canvasOffsetLeft, t.y + e.canvasOffsetTop), e.ctx.lineTo(t.x + e.canvasOffsetLeft + t.width, t.y + e.canvasOffsetTop)
                        }, r: function () {
                            e.ctx.moveTo(t.x + e.canvasOffsetLeft + t.width, t.y + e.canvasOffsetTop), e.ctx.lineTo(t.x + e.canvasOffsetLeft + t.width, t.y + e.canvasOffsetTop + t.height)
                        }, b: function () {
                            e.ctx.moveTo(t.x + e.canvasOffsetLeft, t.y + e.canvasOffsetTop + t.height), e.ctx.lineTo(t.x + e.canvasOffsetLeft + t.width, t.y + e.canvasOffsetTop + t.height)
                        }, l: function () {
                            e.ctx.moveTo(t.x + e.canvasOffsetLeft, t.y + e.canvasOffsetTop), e.ctx.lineTo(t.x + e.canvasOffsetLeft, t.y + e.canvasOffsetTop + t.height)
                        }
                    }[o](), e.ctx.stroke()
                }

                function y(t, o) {
                    if (!t.formattedValue) return {
                        lines: [{width: 0, value: ""}],
                        width: 0,
                        height: t.calculatedLineHeight
                    };
                    var r, n, l, i, a, s, c = t.formattedValue.split(o), d = t.calculatedLineHeight, u = [],
                        h = "nowrap" !== e.style.cellWhiteSpace, f = e.attributes.ellipsisText,
                        g = {width: 0, value: ""}, m = h ? t.paddedHeight : t.calculatedLineHeight;
                    for (u.push(g), l = e.ctx.measureText(" " + f).width, r = 0; r < c.length; r += 1) {
                        n = c[r];
                        var x = e.ctx.measureText(n + o);
                        if (g.width + x.width + l < t.paddedWidth) g.value += n + o, g.width += x.width; else if (/\w-\w/.test(n) && t.paddedWidth < x.width) c.splice(r, 1, n.split("-")[0] + "-", n.split("-")[1]), r -= 1; else {
                            if (g = {
                                width: x.width,
                                value: n + o
                            }, 0 === r && (u = [], u.push(g)), (d += t.calculatedLineHeight) > m) {
                                if (0 === u.length) break;
                                if (1, s = u[u.length - 1], s.width < t.paddedWidth && 1 === c.length) break;
                                a = s.value + n, i = e.ctx.measureText(a + f).width;
                                var p = a;
                                if (i > t.paddedWidth) for (var y = parseInt(a.length / 2), v = -1; y > 0;) a = p.substr(0, y * v + a.length), i = e.ctx.measureText(a + f).width, v = i > t.paddedWidth ? -1 : 1, y = parseInt(y / 2);
                                a += p.length != a.length ? f : "", s.value = a, s.width = i;
                                break
                            }
                            r > 0 && u.push(g)
                        }
                    }
                    return {lines: u, width: 0, height: t.calculatedLineHeight * u.length}
                }

                function v(t) {
                    var o, r, n = (t.text.lines.length, t.fontHeight * t.lineHeight),
                        l = "nowrap" !== e.style.cellWhiteSpace, i = 0;
                    for (o = 0; o < t.text.lines.length; o += 1) {
                        r = t.text.lines[o];
                        var a = Math.max(.5 * (t.height - (l ? t.text.height : t.calculatedLineHeight)), 0) + n,
                            s = t.paddingLeft + t.treeArrowWidth + t.orderByArrowWidth;
                        "right" === t.horizontalAlignment ? s = t.paddingLeft + t.paddedWidth - r.width : "center" === t.horizontalAlignment && (s = t.paddingLeft + (t.paddedWidth + t.paddingRight) / 2 - r.width / 2), "top" === t.verticalAlignment ? a = t.calculatedLineHeight : "bottom" === t.verticalAlignment && (a = t.height - t.paddingBottom - t.text.height), r.height = n + t.lineSpacing, r.offsetLeft = s, r.offsetTop = a, r.x = t.x + s, r.y = t.y + i + a, i += r.height, d(r.value, r.x, r.y)
                    }
                    e.attributes.debug && t.active && requestAnimationFrame(function () {
                        e.ctx.font = e.style.debugFont, e.ctx.fillStyle = e.style.debugColor, d(JSON.stringify({
                            x: t.x,
                            y: t.y,
                            h: t.height,
                            w: t.width,
                            pw: t.paddedWidth,
                            idx: t.columnIndex,
                            idx_ord: t.sortColumnIndex
                        }, null, "\t"), t.x + 14, t.y + 14), d(JSON.stringify(t.text.lines.map(function (e) {
                            return {w: e.width, v: e.value.length}
                        }), null, "\t"), t.x + 14, t.y + 30)
                    })
                }

                function w() {
                    var t, o = 0, r = e.getSchema(), n = 0, l = Math.min(e.frozenColumn, r.length);
                    for (M = 0; n < l;) t = r[n], t.hidden ? M += 1 : o += e.getColummnWidth(n), n += 1;
                    return o
                }

                var b = [], C = !1, B = 0, S = 300, I = [], M = 0, E = [], T = [];
                e.htmlImageCache = {}, e.draw = function (r) {
                    function u(t) {
                        (e.attributes.allowMovingSelection || e.mobile) && (t.selectionBorderTop && t.selectionBorderRight && e.mobile && (X.push([t, "tr"]), t.selectionHandle = "tr"), t.selectionBorderTop && t.selectionBorderLeft && e.mobile && (X.push([t, "tl"]), t.selectionHandle = "tl"), t.selectionBorderBottom && t.selectionBorderLeft && e.mobile && (X.push([t, "bl"]), t.selectionHandle = "bl"), t.selectionBorderBottom && t.selectionBorderRight && ("none" !== e.attributes.selectionHandleBehavior || e.mobile) && (X.push([t, "br"]), t.selectionHandle = "br"))
                    }

                    function h(t, o, r, n) {
                        n = n || {
                            x: 0,
                            y: 0
                        }, t.selectionBorder = "", !t.isRowHeader && e.selections[t.rowIndex + -n.y] && -1 !== e.selections[t.rowIndex + -n.y].indexOf(t.columnIndex + -n.x) && (e.selections[t.rowIndex - 1 - n.y] && -1 !== e.selections[t.rowIndex - 1 - n.y].indexOf(t.columnIndex + -n.x) && 0 !== t.rowIndex || t.isHeader || (o.push([t, "t"]), t[r + "BorderTop"] = !0, t[r + "Border"] += "t"), e.selections[t.rowIndex + 1 + -n.y] && -1 !== e.selections[t.rowIndex + 1 + -n.y].indexOf(t.columnIndex + -n.x) || (o.push([t, "b"]), t[r + "BorderBottom"] = !0, t[r + "Border"] += "b"), e.selections[t.rowIndex + -n.y] && 0 !== t.columnIndex && -1 !== e.selections[t.rowIndex + -n.y].indexOf(t.columnIndex - 1 - n.x) || (o.push([t, "l"]), t[r + "BorderLeft"] = !0, t[r + "Border"] += "l"), e.selections[t.rowIndex + -n.y] && t.columnIndex !== _.length && -1 !== e.selections[t.rowIndex + -n.y].indexOf(t.columnIndex + 1 + -n.x) || (o.push([t, "r"]), t[r + "BorderRight"] = !0, t[r + "Border"] += "r"))
                    }

                    function g(t, o, r) {
                        return function (d, f, g) {
                            if (d.hidden) return 0;
                            var m, x, p, w = d.style || "cell", b = /HeaderCell/.test(w), C = /cornerCell/.test(w),
                                B = "rowHeaderCell" === w, S = "columnHeaderCell" === w,
                                I = e.selections[o] && -1 !== e.selections[o].indexOf(g),
                                E = e.hovers.rowIndex === o && e.hovers.columnIndex === g,
                                T = e.activeCell.rowIndex === o && e.activeCell.columnIndex === g,
                                z = "columnHeaderCellCap" === w, P = t ? t[d.name] : void 0,
                                k = "canvas-datagrid" === d.type,
                                A = !(e.orders.rows[e.activeCell.rowIndex] !== o && e.orders.columns[e.activeCell.columnIndex] !== f || -1 !== g && -1 !== o) && (B ? "activeRowHeaderCell" : "activeColumnHeaderCell"),
                                F = e.formatters[d.type || "string"], N = 0, _ = 0, G = e.sizes.columns[f] || d.width,
                                V = {value: P, row: t, header: d};
                            if (z && (G = j - W), void 0 === G && (G = e.style.cellWidth), G *= e.scale, W + G + e.style.cellBorderWidth < 0 && (W += G + e.style.cellBorderWidth), T && "cornerCell" !== w && (w = "activeCell"), -1 !== e.visibleRows.indexOf(r) || b || e.visibleRows.push(r), p = e.dispatchEvent("formatcellvalue", V), H = W, O = D, "cornerCell" === w ? (H = 0, O = 0) : B ? H = 0 : b && (O = 0), x = {
                                type: k ? "canvas-datagrid-cell" : d.type,
                                style: w,
                                nodeType: "canvas-datagrid-cell",
                                x: H,
                                y: O,
                                fontHeight: (e.style[w + "FontHeight"] || 0) * e.scale,
                                horizontalAlignment: e.style[w + "HorizontalAlignment"],
                                verticalAlignment: e.style[w + "VerticalAlignment"],
                                paddingLeft: (e.style[w + "PaddingLeft"] || 0) * e.scale,
                                paddingTop: (e.style[w + "PaddingTop"] || 0) * e.scale,
                                paddingRight: (e.style[w + "PaddingRight"] || 0) * e.scale,
                                paddingBottom: (e.style[w + "PaddingBottom"] || 0) * e.scale,
                                whiteSpace: e.style.cellWhiteSpace,
                                lineHeight: e.style.cellLineHeight,
                                lineSpacing: e.style.cellLineSpacing,
                                offsetTop: e.canvasOffsetTop + O,
                                offsetLeft: e.canvasOffsetLeft + H,
                                scrollTop: e.scrollBox.scrollTop,
                                scrollLeft: e.scrollBox.scrollLeft,
                                active: T || A,
                                hovered: E,
                                selected: I,
                                width: G,
                                height: oe,
                                offsetWidth: G,
                                offsetHeight: oe,
                                parentNode: e.intf.parentNode,
                                offsetParent: e.intf.parentNode,
                                data: t,
                                isCorner: C,
                                isHeader: b,
                                isColumnHeader: S,
                                isColumnHeaderCellCap: z,
                                isRowHeader: B,
                                rowOpen: L,
                                header: d,
                                columnIndex: g,
                                rowIndex: o,
                                sortColumnIndex: f,
                                sortRowIndex: r,
                                isGrid: k,
                                isNormal: !k && !C && !b,
                                gridId: (e.attributes.name || "") + r + ":" + f,
                                parentGrid: e.intf,
                                innerHTML: "",
                                activeHeader: A,
                                value: b && !B ? d.title || d.name : P
                            }, x.calculatedLineHeight = x.fontHeight * x.lineHeight + x.lineSpacing, x.paddedWidth = x.width - x.paddingRight - x.paddingLeft, x.paddedHeight = x.height - x.paddingTop - x.paddingBottom, V.cell = x, x.userHeight = x.isHeader ? e.sizes.rows[-1] : R, x.userWidth = x.isHeader ? e.sizes.columns.cornerCell : e.sizes.columns[f], e.visibleCells.unshift(x), !e.dispatchEvent("beforerendercell", V)) {
                                if (e.ctx.fillStyle = e.style[w + "BackgroundColor"], e.ctx.strokeStyle = e.style[w + "BorderColor"], e.ctx.lineWidth = e.style[w + "BorderWidth"], E && (e.ctx.fillStyle = e.style[w + "HoverBackgroundColor"], e.ctx.strokeStyle = e.style[w + "HoverBorderColor"]), I && (e.ctx.fillStyle = e.style[w + "SelectedBackgroundColor"], e.ctx.strokeStyle = e.style[w + "SelectedBorderColor"]), A && (e.ctx.fillStyle = e.style[A + "BackgroundColor"]), e.dispatchEvent("rendercell", V), x.isGrid && (x.height !== R && (x.height = R || e.style.cellHeightWithChildGrid, M = !0), x.width = e.sizes.columns[f] || e.style.cellWidthWithChildGrid), L && !x.isRowHeader && (x.height = e.sizes.rows[r] || e.style.cellHeight), x.isGrid || (s(H, O, x.width, x.height), c(H, O, x.width, x.height)), e.ctx.save(), a(x.x, x.y, x.width, x.height, 0), e.ctx.clip(), e.dispatchEvent("afterrendercell", V), x.height === oe || L && !x.isRowHeader || (e.sizes.rows[b ? -1 : r] = x.height, M = !0), x.width !== G && (e.sizes.columns[f] = x.width, M = !0), B && e.attributes.tree && (e.dispatchEvent("rendertreearrow", V) || (_ = i(x, e.style[w + "PaddingLeft"], O, 0))), e.attributes.showRowNumbers && B || !B) if (x.isGrid && !e.dispatchEvent("beforerendercellgrid", V)) {
                                    if (!e.childGrids[x.gridId]) {
                                        if (m = e.cellGridAttributes, m.name = e.attributes.saveAppearance ? x.gridId : void 0, m.component = !1, m.parentNode = x, m.data = P, V.cellGridAttributes = m, e.dispatchEvent("beforecreatecellgrid", V)) return;
                                        e.childGrids[x.gridId] = e.createGrid(m), e.sizes.rows[r] = e.sizes.rows[r] || e.style.cellGridHeight, M = !0
                                    }
                                    x.grid = e.childGrids[x.gridId], x.grid.parentNode = x, x.grid.visible = !0, x.grid.draw(), e.dispatchEvent("rendercellgrid", V)
                                } else x.isGrid || (e.childGrids[x.gridId] && (e.childGrids[x.gridId].parentNode.offsetHeight = 0), b && e.orderBy === d.name && (e.dispatchEvent("renderorderbyarrow", V) || (N = l(H + e.style[w + "PaddingLeft"], 0))), e.ctx.fillStyle = e.style[w + "Color"], E && (e.ctx.fillStyle = e.style[w + "HoverColor"]), I && (e.ctx.fillStyle = e.style[w + "SelectedColor"]), A && (e.ctx.fillStyle = e.style[A + "Color"]), x.treeArrowWidth = _, x.orderByArrowWidth = N, p = void 0 !== p ? p : F ? F(V) : "", void 0 !== p || F || (p = "", console.warn("canvas-datagrid: Unknown format " + d.type + " add a cellFormater")), x.formattedValue = (void 0 !== p && null !== p ? p : "").toString(), e.columnFilters && void 0 !== e.columnFilters[p] && b && (x.formattedValue = e.attributes.filterTextPrefix + p), e.ctx.font = e.style[w + "FontHeight"] * e.scale + "px " + e.style[w + "FontName"], e.dispatchEvent("formattext", V) || (x.text = y(x, " ")), e.dispatchEvent("rendertext", V) || (x.innerHTML || "html" === d.type ? n(x) : v(x)));
                                return T && (Z = x), h(x, Y, "selection"), u(x), e.movingSelection && h(x, U, "move", e.moveOffset), e.ctx.restore(), W += x.width + (q ? 0 : e.style.cellBorderWidth), x.width
                            }
                        }
                    }

                    function m(t, o, r) {
                        var n, l;
                        e.attributes.showRowHeaders && (W = 0, l = o + 1, z = {rowHeaderCell: l}, n = {
                            name: "rowHeaderCell",
                            width: e.sizes.columns[-1] || e.style.rowHeaderCellWidth,
                            style: "rowHeaderCell",
                            type: "string",
                            data: l,
                            index: -1
                        }, L = e.openChildren[o], g(z, o, r)(n, -1, -1))
                    }

                    function C(t, o) {
                        var r, n, l, i, a = _.length;
                        if (D - 2 * oe > N) return !1;
                        if (V = K[t], L = e.openChildren[t], l = (e.sizes.rows[t] || e.style.cellHeight) * e.scale, n = (L ? e.sizes.trees[t] : 0) * e.scale, R = l + n, D < -R) return !1;
                        for (e.attributes.showRowHeaders && (W += te), oe = R, i = e.scrollIndexLeft; i < a; i += 1) if (r = e.orders.columns[i], (W += g(V, t, o)(_[r], r, i)) > e.width) {
                            e.scrollIndexRight = i, e.scrollPixelRight = W;
                            break
                        }
                        for (W = 0, e.attributes.showRowHeaders && (W += te), i = 0; i < e.frozenColumn && (r = e.orders.columns[i], !((W += g(V, t, o)(_[r], r, i)) > e.width)); i += 1) ;
                        return e.lastFrozenColumnPixel = W, oe = R, W = -e.scrollBox.scrollLeft + e.scrollPixelLeft + e.style.cellBorderWidth, k = e.childGrids[t], t !== K.length && L ? (k.visible = !0, k.parentNode = {
                            offsetTop: D + l + e.canvasOffsetTop,
                            offsetLeft: te - 1 + e.canvasOffsetLeft,
                            offsetHeight: n,
                            offsetWidth: e.width - te - e.style.scrollBarWidth - 1,
                            offsetParent: e.intf.parentNode,
                            parentNode: e.intf.parentNode,
                            style: e.style,
                            nodeType: "canvas-datagrid-tree",
                            scrollTop: e.scrollBox.scrollTop,
                            scrollLeft: e.scrollBox.scrollLeft,
                            rowIndex: t
                        }, e.visibleCells.unshift({
                            rowIndex: t,
                            columnIndex: 0,
                            y: k.parentNode.offsetTop,
                            x: k.parentNode.offsetLeft,
                            height: k.height,
                            width: k.width,
                            style: "tree-grid",
                            type: k.parentNode.nodeType
                        }), k.draw()) : k && (k.parentNode.offsetHeight = 0, delete e.sizes.trees[t]), J.push([V, t, o, D, R]), e.visibleRowHeights[t] = R, D += oe + (q ? 0 : e.style.cellBorderWidth), !0
                    }

                    if (!e.dispatchEvent("beforedraw", {}) && (e.isChildGrid || e.height && e.width)) {
                        if (e.isChildGrid && r) return void requestAnimationFrame(e.parentGrid.draw);
                        if (!1 !== e.intf.visible) {
                            var M, z, P, H, O, k, L, R, A, D, W, F, N, j, _, G, V, Z, K = e.data || [],
                                q = "collapse" === e.style.gridBorderCollapse, Y = [], U = [], X = [], J = [],
                                Q = K.length, $ = e.currentCell || {}, ee = e.getColumnHeaderCellHeight(),
                                te = e.getRowHeaderCellWidth(), oe = e.style.cellHeight;
                            B += 1, P = performance.now(), e.visibleRowHeights = [], K.length > e.orders.rows.length && e.createRowOrders(), e.ctx.save(), function () {
                                e.visibleRows = [], _ = e.getSchema(), e.visibleCells = [], e.canvasOffsetTop = e.isChildGrid ? e.parentNode.offsetTop : 0, e.canvasOffsetLeft = e.isChildGrid ? e.parentNode.offsetLeft : 0, N = e.height, j = e.width
                            }(), function () {
                                a(0, 0, j, N, 0), e.ctx.clip(), e.ctx.fillStyle = e.style.gridBackgroundColor, s(0, 0, j, N)
                            }(), function () {
                                var t, o = Math.min(K.length, e.frozenRow);
                                for (W = -e.scrollBox.scrollLeft + e.scrollPixelLeft + e.style.cellBorderWidth, D = ee, G = 0; G < o && (t = e.orders.rows[G], C(t, G)); G += 1) ;
                                e.attributes.allowFreezingRows && (D += e.style.frozenMarkerBorderWidth + e.style.frozenMarkerWidth - .4999999999), e.lastFrozenRowPixel = D
                            }(), function () {
                                e.ctx.save(), e.frozenRow > 0 && (a(0, e.lastFrozenRowPixel, e.width, e.height - e.lastFrozenRowPixel, 0), e.ctx.clip());
                                var t, o, r, n = _.length;
                                for (W = -e.scrollBox.scrollLeft + e.scrollPixelLeft + e.style.cellBorderWidth, e.attributes.snapToRow || (D += -e.scrollBox.scrollTop + e.scrollPixelTop + e.style.cellBorderWidth), G = e.frozenRow + e.scrollIndexTop; G < Q && (o = e.orders.rows[G], e.scrollIndexBottom = G, e.scrollPixelBottom = D, C(o, G)); G += 1) ;
                                if (e.attributes.showNewRow) {
                                    for (e.attributes.showRowHeaders && (W += te), R = oe = e.style.cellHeight, L = !1, t = e.scrollIndexLeft; t < n && (r = e.orders.columns[t], !((W += g(e.newRow, K.length, K.length)(_[r], r, t)) > e.width + e.scrollBox.scrollLeft)); t += 1) ;
                                    J.push([e.newRow, K.length, K.length, D, R])
                                }
                                e.ctx.restore()
                            }(), function () {
                                if (Z) {
                                    e.ctx.save();
                                    var t = e.activeCell.columnIndex + 1 > e.frozenColumn || e.activeCell.rowIndex + 1 > e.frozenRow;
                                    a(t ? e.lastFrozenColumnPixel : 0, t ? e.lastFrozenRowPixel : 0, t ? e.width - e.lastFrozenColumnPixel : e.width, t ? e.height - e.lastFrozenRowPixel : e.height, 0), e.ctx.clip(), "row" === e.attributes.selectionMode ? e.activeCell && e.activeCell.rowIndex === Z.rowIndex && (e.ctx.lineWidth = e.style.activeCellOverlayBorderWidth, e.ctx.strokeStyle = e.style.activeCellOverlayBorderColor, c(0, Z.y, e.getHeaderWidth() + te, e.visibleRowHeights[Z.rowIndex])) : (e.ctx.lineWidth = e.style.activeCellOverlayBorderWidth, e.ctx.strokeStyle = e.style.activeCellOverlayBorderColor, c(Z.x, Z.y, Z.width, Z.height)), e.ctx.restore()
                                }
                            }(), function () {
                                function t(t, a) {
                                    for (a = Math.min(a, c), n = t; n < a && (r = e.orders.columns[n], i = _[r], i.hidden || (o = {
                                        title: i.title,
                                        name: i.name,
                                        width: i.width || e.style.cellWidth,
                                        style: "columnHeaderCell",
                                        type: "string",
                                        index: n,
                                        order: r
                                    }, l = {columnHeaderCell: i.title || i.name}, !((W += g(l, -1, -1)(o, r, n)) > e.width + e.scrollBox.scrollLeft))); n += 1) ;
                                }

                                var o, r, n, l, i, s, c = _.length;
                                J.forEach(function (t, o) {
                                    D = t[3], oe = t[4], o === e.frozenRow && (e.ctx.save(), a(0, e.lastFrozenRowPixel, e.width, e.height - e.lastFrozenRowPixel, 0), e.ctx.clip()), m(t[0], t[1], t[2])
                                }), e.ctx.restore(), e.attributes.showColumnHeaders && (W = -e.scrollBox.scrollLeft + e.scrollPixelLeft + e.style.columnHeaderCellBorderWidth, e.attributes.showRowHeaders && (W += te), D = 0, oe = e.getColumnHeaderCellHeight(), t(e.scrollIndexLeft, c), s = W, W = e.style.columnHeaderCellBorderWidth, e.attributes.showRowHeaders && (W += te), t(0, e.frozenColumn), W = s, W < j && (F = {
                                    name: "",
                                    width: e.style.scrollBarWidth,
                                    style: "columnHeaderCellCap",
                                    isColumnHeaderCell: !0,
                                    isColumnHeaderCellCap: !0,
                                    type: "string",
                                    index: _.length
                                }, g({endCap: ""}, -1, -1)(F, -1, -1)), e.attributes.showRowHeaders && (A = {cornerCell: ""}, W = 0, F = {
                                    name: "cornerCell",
                                    width: e.style.rowHeaderCellWidth,
                                    style: "cornerCell",
                                    type: "string",
                                    index: -1
                                }, g(A, -1, -1)(F, -1, -1)))
                            }(), function () {
                                var t = e.lastFrozenRowPixel - e.style.frozenMarkerWidth,
                                    o = e.lastFrozenColumnPixel - e.style.frozenMarkerBorderWidth,
                                    r = e.currentCell && "frozen-row-marker" === e.currentCell.style,
                                    n = e.currentCell && "frozen-column-marker" === e.currentCell.style;
                                e.ctx.lineWidth = e.style.frozenMarkerBorderWidth, e.attributes.allowFreezingColumns && (e.ctx.fillStyle = n ? e.style.frozenMarkerHoverColor : e.style.frozenMarkerColor, e.ctx.strokeStyle = n ? e.style.frozenMarkerHoverBorderColor : e.style.frozenMarkerBorderColor, s(o, 0, e.style.frozenMarkerWidth, e.height), c(o, 0, e.style.frozenMarkerWidth, e.height), e.visibleCells.unshift({
                                    x: o,
                                    y: 0,
                                    height: e.height,
                                    width: e.style.frozenMarkerWidth + e.style.frozenMarkerBorderWidth,
                                    style: "frozen-column-marker"
                                })), e.attributes.allowFreezingRows && (e.ctx.fillStyle = r ? e.style.frozenMarkerHoverColor : e.style.frozenMarkerColor, e.ctx.strokeStyle = r ? e.style.frozenMarkerHoverBorderColor : e.style.frozenMarkerBorderColor, s(0, t, e.width, e.style.frozenMarkerWidth), c(0, t, e.width, e.style.frozenMarkerWidth), e.visibleCells.unshift({
                                    x: 0,
                                    y: t,
                                    height: e.style.frozenMarkerWidth + e.style.frozenMarkerBorderWidth,
                                    width: e.width,
                                    style: "frozen-row-marker"
                                })), e.freezeMarkerPosition && (e.ctx.fillStyle = e.style.frozenMarkerActiveColor, e.ctx.strokeStyle = e.style.frozenMarkerActiveBorderColor, "frozen-column-marker" === e.dragMode ? (s(e.freezeMarkerPosition.x, 0, e.style.frozenMarkerWidth, e.height), c(e.freezeMarkerPosition.x, 0, e.style.frozenMarkerWidth, e.height)) : (s(0, e.freezeMarkerPosition.y, e.width, e.style.frozenMarkerWidth), c(0, e.freezeMarkerPosition.y, e.width, e.style.frozenMarkerWidth)))
                            }(), function () {
                                (e.mobile || e.attributes.allowMovingSelection) && (e.ctx.lineWidth = e.style.selectionHandleBorderWidth, e.ctx.strokeStyle = e.style.selectionHandleBorderColor, e.ctx.fillStyle = e.style.selectionHandleColor, X.forEach(function (t) {
                                    x(t[0], t[1]);
                                    var o = e.attributes.touchSelectHandleZone / 2,
                                        r = t[0].x + ("tl" === t[1] || "bl" === t[1] ? 0 : t[0].width) - o,
                                        n = t[0].y + ("bl" === t[1] || "br" === t[1] ? t[0].height : 0) - o;
                                    e.visibleCells.unshift({
                                        x: r,
                                        y: n,
                                        height: e.style.selectionHandleSize + o,
                                        width: e.style.selectionHandleSize + o,
                                        style: "selection-handle-" + t[1]
                                    })
                                }))
                            }(), function () {
                                if (e.reorderObject) {
                                    var t = {
                                        height: e.reorderObject.height,
                                        width: e.reorderObject.width,
                                        x: e.reorderObject.x + e.reorderObject.dragOffset.x,
                                        y: e.reorderObject.y + e.reorderObject.dragOffset.y
                                    }, o = {width: j, height: N, x: 0, y: 0};
                                    e.ctx.fillStyle = e.style.reorderMarkerBackgroundColor, e.ctx.lineWidth = e.style.reorderMarkerBorderWidth, e.ctx.strokeStyle = e.style.reorderMarkerBorderColor, "row-reorder" === e.dragMode ? (t.width = j, t.x = 0, o.width = j, o.height = e.currentCell.height, o.y = e.currentCell.y, s(t.x, t.y, t.width, t.height), c(t.x, t.y, t.width, t.height), e.ctx.lineWidth = e.style.reorderMarkerIndexBorderWidth, e.ctx.strokeStyle = e.style.reorderMarkerIndexBorderColor, e.currentCell.rowIndex !== e.reorderObject.rowIndex && e.currentCell.rowIndex > -1 && e.currentCell.rowIndex < Q && p(o, e.reorderTarget.sortRowIndex > e.reorderObject.sortRowIndex ? "b" : "t")) : "column-reorder" === e.dragMode && e.reorderObject && (t.height = N, t.y = 0, o.height = N, o.width = e.currentCell.width, o.y = 0, o.x = e.currentCell.x, s(t.x, t.y, t.width, t.height), c(t.x, t.y, t.width, t.height), e.ctx.lineWidth = e.style.reorderMarkerIndexBorderWidth, e.ctx.strokeStyle = e.style.reorderMarkerIndexBorderColor, e.currentCell.sortColumnIndex !== e.reorderObject.sortColumnIndex && e.currentCell.sortColumnIndex > -1 && e.currentCell.sortColumnIndex < _.length && p(o, e.reorderTarget.columnIndex > e.reorderObject.columnIndex ? "r" : "l"))
                                }
                            }(), function () {
                                e.movingSelection && (e.ctx.lineWidth = e.style.moveOverlayBorderWidth, e.ctx.strokeStyle = e.style.moveOverlayBorderColor, e.ctx.setLineDash(e.style.moveOverlayBorderSegments), U.forEach(function (e) {
                                    p(e[0], e[1])
                                }), e.ctx.setLineDash([]))
                            }(), function () {
                                e.ctx.lineWidth = e.style.gridBorderWidth, e.ctx.strokeStyle = e.style.gridBorderColor, c(0, 0, e.width, e.height)
                            }(), function () {
                                function t(e) {
                                    p(e[0], e[1])
                                }

                                e.ctx.lineWidth = e.style.selectionOverlayBorderWidth, e.ctx.strokeStyle = e.style.selectionOverlayBorderColor, Y.filter(function (t) {
                                    return t[0].rowIndex < e.frozenRow && t[0].columnIndex < e.frozenColumn
                                }).forEach(t), e.ctx.save(), f(0), Y.filter(function (t) {
                                    return t[0].rowIndex >= e.frozenRow && t[0].columnIndex >= e.frozenColumn
                                }).forEach(t), e.ctx.restore(), e.ctx.save(), f(1), Y.filter(function (t) {
                                    return t[0].rowIndex >= e.frozenRow && t[0].columnIndex < e.frozenColumn
                                }).forEach(t), e.ctx.restore(), e.ctx.save(), f(2), Y.filter(function (t) {
                                    return t[0].rowIndex < e.frozenRow && t[0].columnIndex >= e.frozenColumn
                                }).forEach(t), e.ctx.restore()
                            }(), function () {
                                var t, o = e.scrollBox.entities, r = 2 * e.style.scrollBarBoxMargin;
                                e.ctx.strokeStyle = e.style.scrollBarBorderColor, e.ctx.lineWidth = e.style.scrollBarBorderWidth, o.horizontalBox.x = te + e.style.scrollBarBoxMargin + (o.horizontalBar.width - e.scrollBox.scrollBoxWidth) * (e.scrollBox.scrollLeft / e.scrollBox.scrollWidth), o.verticalBox.y = ee + e.style.scrollBarBoxMargin + (o.verticalBar.height - e.scrollBox.scrollBoxHeight) * (e.scrollBox.scrollTop / e.scrollBox.scrollHeight), e.scrollBox.horizontalBarVisible && (e.ctx.fillStyle = e.style.scrollBarBackgroundColor, s(o.horizontalBar.x, o.horizontalBar.y, o.horizontalBar.width + r, o.horizontalBar.height), c(o.horizontalBar.x, o.horizontalBar.y, o.horizontalBar.width + r, o.horizontalBar.height), e.ctx.fillStyle = e.style.scrollBarBoxColor, e.scrollBox.horizontalBoxVisible && (/horizontal/.test($.context) && (e.ctx.fillStyle = e.style.scrollBarActiveColor), a(o.horizontalBox.x, o.horizontalBox.y, o.horizontalBox.width, o.horizontalBox.height, e.style.scrollBarBoxBorderRadius), e.ctx.stroke(), e.ctx.fill()), t = !0, e.visibleCells.unshift(o.horizontalBar), e.visibleCells.unshift(o.horizontalBox)), e.scrollBox.verticalBarVisible && (e.ctx.fillStyle = e.style.scrollBarBackgroundColor, s(o.verticalBar.x, o.verticalBar.y, o.verticalBar.width, o.verticalBar.height + r), c(o.verticalBar.x, o.verticalBar.y, o.verticalBar.width, o.verticalBar.height + r), e.scrollBox.verticalBoxVisible && (e.ctx.fillStyle = e.style.scrollBarBoxColor, /vertical/.test($.context) && (e.ctx.fillStyle = e.style.scrollBarActiveColor), a(o.verticalBox.x, o.verticalBox.y, o.verticalBox.width, o.verticalBox.height, e.style.scrollBarBoxBorderRadius), e.ctx.stroke(), e.ctx.fill()), t = !0, e.visibleCells.unshift(o.verticalBar), e.visibleCells.unshift(o.verticalBox)), t && (e.ctx.strokeStyle = e.style.scrollBarCornerBorderColor, e.ctx.fillStyle = e.style.scrollBarCornerBackgroundColor, a(o.corner.x, o.corner.y, o.corner.width, o.corner.height, 0), e.ctx.stroke(), e.ctx.fill(), e.visibleCells.unshift(o.corner))
                            }(), M && e.resize(!0), function () {
                                e.ctx.save();
                                var o;
                                if ((e.attributes.showPerformance || e.attributes.debug) && (0 === b.length && (b = t(0, S, 1, 0)), b.pop(), b.unshift(performance.now() - P)), !e.attributes.debug) return void e.ctx.restore();
                                e.ctx.font = e.style.debugFont, o = {}, o.perf = (b.reduce(function (e, t) {
                                    return e + t
                                }, 0) / Math.min(B, b.length)).toFixed(1), o.perfDelta = b[0].toFixed(1), o.frozenColumnsWidth = w(), o.htmlImages = Object.keys(e.htmlImageCache).length, o.reorderObject = "x: " + (e.reorderObject || {columnIndex: 0}).columnIndex + ", y: " + (e.reorderObject || {rowIndex: 0}).rowIndex, o.reorderTarget = "x: " + (e.reorderTarget || {columnIndex: 0}).columnIndex + ", y: " + (e.reorderTarget || {rowIndex: 0}).rowIndex, o.scale = e.scale, o.startScale = e.startScale, o.scaleDelta = e.scaleDelta, o.zoomDeltaStart = e.zoomDeltaStart, o.touchLength = e.touchLength, o.touches = "y0: " + (e.touchPosition || {y: 0}).y + " y1: " + (e.touchPosition1 || {y: 0}).y, o.scrollBox = e.scrollBox.toString(), o.scrollIndex = "x: " + e.scrollIndexLeft + ", y: " + e.scrollIndexTop, o.scrollPixel = "x: " + e.scrollPixelLeft + ", y: " + e.scrollPixelTop, o.canvasOffset = "x: " + e.canvasOffsetLeft + ", y: " + e.canvasOffsetTop, o.touchDelta = "x: " + e.touchDelta.x + ", y: " + e.touchDelta.y, o.touchAnimateTo = "x: " + e.touchAnimateTo.x + ", y: " + e.touchAnimateTo.y, o.scrollAnimation = "x: " + e.scrollAnimation.x + ", y: " + e.scrollAnimation.y, o.touchPPS = "x: " + e.xPPS + ", y: " + e.yPPS, o.touchPPST = "x: " + e.xPPST + ", y: " + e.yPPST, o.touchDuration = e.touchDuration, o.pointerLockPosition = e.pointerLockPosition ? e.pointerLockPosition.x + ", " + e.pointerLockPosition.y : "", o.size = "w: " + e.width + ", h: " + e.height, o.mouse = "x: " + e.mouse.x + ", y: " + e.mouse.y, o.touch = e.touchStart ? "x: " + e.touchStart.x + ", y: " + e.touchStart.y : "", o.entities = e.visibleCells.length, o.hasFocus = e.hasFocus, o.dragMode = e.dragMode, e.currentCell && (o.columnIndex = e.currentCell.columnIndex, o.rowIndex = e.currentCell.rowIndex, o.sortColumnIndex = e.currentCell.sortColumnIndex, o.sortRowIndex = e.currentCell.sortRowIndex, o.context = e.currentCell.context, o.dragContext = e.currentCell.dragContext, o.style = e.currentCell.style, o.type = e.currentCell.type), e.ctx.textAlign = "right", e.ctx.fillStyle = e.style.debugBackgroundColor, s(0, 0, e.width, e.height), Object.keys(o).forEach(function (t, r) {
                                    var n = t + ": " + o[t];
                                    e.ctx.fillStyle = e.style.debugColor, d(n, j - 20, (e.attributes.showPerformance ? 140 : 24) + 14 * r)
                                }), e.ctx.restore()
                            }(), function () {
                                function r(t, r, c, u, h, f, g) {
                                    var m;
                                    o(n, a, l, i, r, c, u, h, f), e.ctx.fillStyle = h, s(3 + l, i + 9 + 11 * g, 8, 8), e.ctx.fillStyle = e.style.debugPerfChartTextColor, m = void 0 !== c ? r[0][c] : r[0], d(t + " " + (isNaN(m) ? 0 : m).toFixed(3), 14 + l, i + 16 + 11 * g)
                                }

                                if (e.attributes.showPerformance) {
                                    var n = 250,
                                        l = e.width - n - e.style.scrollBarWidth - 2 * e.style.scrollBarBorderWidth,
                                        i = ee, a = 100;
                                    0 === E.length && (E = t(0, S, 1, function () {
                                        return [0, 0]
                                    })), 0 === T.length && (T = t(0, S, 1, function () {
                                        return [0, 0]
                                    })), 0 === I.length && (I = t(0, S, 1, 0)), e.ctx.lineWidth = .5, e.ctx.textAlign = "left", e.ctx.font = e.style.debugFont, e.ctx.fillStyle = e.style.debugPerfChartBackground, s(l, i, n, a), [["Scroll Height", E, 0, e.scrollBox.scrollHeight, e.style.debugScrollHeightColor, !1], ["Scroll Width", E, 1, e.scrollBox.scrollWidth, e.style.debugScrollWidthColor, !1], ["Performance", b, void 0, 200, e.style.debugPerformanceColor, !1], ["Entities", I, void 0, 1500, e.style.debugEntitiesColor, !1], ["TouchPPSX", T, 0, 1e3, e.style.debugTouchPPSXColor, !0], ["TouchPPSY", T, 1, 1e3, e.style.debugTouchPPSYColor, !0]].forEach(function (e, t) {
                                        e.push(t), r.apply(null, e)
                                    }), e.ctx.fillStyle = e.style.debugPerfChartBackground, I.pop(), I.unshift(e.visibleCells.length), E.pop(), E.unshift([e.scrollBox.scrollTop, e.scrollBox.scrollLeft]), T.pop(), T.unshift([e.yPPS, e.xPPS])
                                }
                            }(), e.dispatchEvent("afterdraw", {}) || e.ctx.restore()
                        }
                    }
                }
            }
        }.apply(t, r)) && (e.exports = n)
    }, function (e, t, o) {
        var r, n;
        r = [], void 0 !== (n = function () {
            "use strict";
            return function (e) {
                var t;
                e.stopPropagation = function (e) {
                    e.stopPropagation()
                }, e.addEventListener = function (t, o) {
                    e.events[t] = e.events[t] || [], e.events[t].unshift(o)
                }, e.removeEventListener = function (t, o) {
                    (e.events[t] || []).forEach(function (r, n) {
                        o === r && e.events[t].splice(n, 1)
                    })
                }, e.dispatchEvent = function (t, o) {
                    function r() {
                        n = !0
                    }

                    o = t.type ? t : o || {}, t = t.type || t;
                    var n;
                    if (e.events[t]) return e.events[t].forEach(function (t) {
                        o.ctx = e.ctx, o.preventDefault = r, t.apply(e.intf, [o])
                    }), n
                }, e.getRatio = function () {
                    return Math.min(e.attributes.maxPixelRatio, (window.devicePixelRatio || 1) / (e.ctx.webkitBackingStorePixelRatio || e.ctx.mozBackingStorePixelRatio || e.ctx.msBackingStorePixelRatio || e.ctx.oBackingStorePixelRatio || e.ctx.backingStorePixelRatio || 1))
                }, e.resize = function (t) {
                    function o() {
                        e.scrollBox.horizontalBarVisible = "auto" !== e.style.width && b > e.scrollBox.width && "hidden" !== e.style.overflowX || "scroll" === e.style.overflowX, e.scrollBox.horizontalBoxVisible = b > e.scrollBox.width, e.scrollBox.verticalBarVisible = "auto" !== e.style.height && w > e.scrollBox.height && "hidden" !== e.style.overflowY || "scroll" === e.style.overflowY, e.scrollBox.verticalBoxVisible = w > e.scrollBox.height
                    }

                    function r() {
                        e.scrollBox.width = e.width - S, e.scrollBox.height = e.height - B
                    }

                    function n() {
                        e.isChildGrid || (i = {
                            height: B + w + y + 1,
                            width: b + S + y
                        }, ["width", "height"].forEach(function (t) {
                            -1 !== ["auto", void 0].indexOf(e.style[t]) && -1 !== ["auto", void 0].indexOf(e.appliedInlineStyles[t]) ? e.parentNodeStyle[t] = i[t] + "px" : (e.parentNodeStyle[t] = e.style[t], e.isComponet && (e.canvas.style[t] = e.style[t]))
                        }))
                    }

                    if (e.canvas) {
                        var l, i, a = {x: 0, y: 0, height: 0, width: 0, style: "vertical-scroll-bar"},
                            s = {x: 0, y: 0, height: 0, width: 0, style: "horizontal-scroll-bar"},
                            c = {x: 0, y: 0, height: 0, width: 0, style: "vertical-scroll-box"},
                            d = {x: 0, y: 0, height: 0, width: 0, style: "horizontal-scroll-box"}, u = {
                                x: 0,
                                y: 0,
                                height: 0,
                                width: 0,
                                isCorner: !0,
                                isScrollBoxCorner: !0,
                                style: "scroll-box-corner"
                            }, h = 2 * e.style.scrollBarBoxMargin, f = 2 * e.style.scrollBarBorderWidth,
                            g = .5 * e.style.scrollBarBoxMargin,
                            m = e.style.scrollBarWidth + 2 * e.style.scrollBarBorderWidth, x = e.getRatio(),
                            p = "collapse" === e.style.gridBorderCollapse ? 1 : 2, y = e.style.cellBorderWidth * p,
                            v = e.style.columnHeaderCellBorderWidth * p, w = 0, b = 0, C = (e.data || []).length,
                            B = e.getColumnHeaderCellHeight(), S = e.getRowHeaderCellWidth(), I = e.style.cellHeight,
                            M = e.getSchema();
                        for (e.scrollCache.x = [], e.scrollCache.y = [], l = 0; l < C; l += 1) e.scrollCache.y[l] = w, w += ((e.sizes.rows[l] || I) + (e.sizes.trees[l] || 0)) * e.scale + (e.frozenRow > l ? e.sizes.trees[l] || 0 : 0);
                        return C > 1 && (e.scrollCache.y[l] = w), b = M.reduce(function (t, o, r) {
                            if (o = M[e.orders.columns[r]], o.hidden) return e.scrollCache.x[r] = t, t;
                            var n = t + e.getColummnWidth(e.orders.columns[r]);
                            return e.scrollCache.x[r] = n, n
                        }, 0) || 0, e.attributes.showNewRow && (w += I), e.attributes.snapToRow && (w += e.style.cellHeight), n(), e.isChildGrid ? (e.width = e.parentNode.offsetWidth, e.height = e.parentNode.offsetHeight) : e.height === e.canvas.offsetHeight && e.width === e.canvas.offsetWidth || (e.height = e.canvas.offsetHeight, e.width = e.canvas.offsetWidth, e.canvasOffsetLeft = e.args.canvasOffsetLeft || 0, e.canvasOffsetTop = e.args.canvasOffsetTop || 0), e.scrollBox.top = B + v, e.scrollBox.left = S, r(), o(), e.scrollBox.horizontalBarVisible && ("auto" !== e.style.height || e.isChildGrid || (e.height += m), w += m, n(), r(), o()), e.scrollBox.verticalBarVisible && ("auto" !== e.style.width || e.isChildGrid || (e.width += m), b += m, n(), r(), o()), r(), e.scrollBox.scrollWidth = b - e.scrollBox.width, e.scrollBox.scrollHeight = w - e.scrollBox.height, e.scrollBox.widthBoxRatio = e.scrollBox.width / b, e.scrollBox.scrollBoxWidth = e.scrollBox.width * e.scrollBox.widthBoxRatio - e.style.scrollBarWidth - f - g, e.scrollBox.heightBoxRatio = (e.scrollBox.height - B) / w, e.scrollBox.scrollBoxHeight = e.scrollBox.height * e.scrollBox.heightBoxRatio - e.style.scrollBarWidth - f - g, e.scrollBox.scrollBoxWidth = Math.max(e.scrollBox.scrollBoxWidth, e.style.scrollBarBoxMinSize), e.scrollBox.scrollBoxHeight = Math.max(e.scrollBox.scrollBoxHeight, e.style.scrollBarBoxMinSize), s.x += S, s.y += e.height - e.style.scrollBarWidth - g, s.width = e.width - e.style.scrollBarWidth - S - g - h, s.height = e.style.scrollBarWidth + e.style.scrollBarBorderWidth + g, d.y = s.y + e.style.scrollBarBoxMargin, d.width = e.scrollBox.scrollBoxWidth, d.height = e.style.scrollBarBoxWidth, a.x += e.width - e.style.scrollBarWidth - e.style.scrollBarBorderWidth - g, a.y += B, a.width = e.style.scrollBarWidth + e.style.scrollBarBorderWidth + g, a.height = e.height - B - e.style.scrollBarWidth - g - h, c.x = a.x + e.style.scrollBarBoxMargin, c.width = e.style.scrollBarBoxWidth, c.height = e.scrollBox.scrollBoxHeight, u.x = s.x + s.width + h, u.y = a.y + a.height + h, u.width = e.style.scrollBarWidth + e.style.scrollBarBorderWidth, u.height = e.style.scrollBarWidth + e.style.scrollBarBorderWidth, e.scrollBox.entities = {
                            horizontalBar: s,
                            horizontalBox: d,
                            verticalBar: a,
                            verticalBox: c,
                            corner: u
                        }, e.scrollBox.bar = {v: a, h: s}, e.scrollBox.box = {
                            v: c,
                            h: d
                        }, e.page = Math.max(1, e.visibleRows.length - 3 - e.attributes.pageUpDownOverlap), e.isChildGrid || (e.canvas.width = e.width * x, e.canvas.height = e.height * x, e.ctx.scale(x, x)), e.resizeEditInput(), e.scroll(!0), t && e.draw(!0), e.dispatchEvent("resize", {}), !0
                    }
                }, e.scroll = function (t) {
                    var o = e.getSchema(), r = (e.data || []).length, n = e.style.cellHeight;
                    for (e.scrollIndexTop = Math.floor(r * (e.scrollBox.scrollTop / e.scrollBox.scrollHeight) - 100), e.scrollIndexTop = Math.max(e.scrollIndexTop, 0), e.scrollPixelTop = e.scrollCache.y[e.scrollIndexTop], 0 === e.scrollBox.scrollHeight && (e.scrollIndexTop = 0), e.scrollPixelTop = 0, e.scrollIndexLeft = e.frozenColumn, e.scrollPixelLeft = 0; e.scrollPixelTop < e.scrollBox.scrollTop && e.scrollIndexTop < e.data.length;) e.scrollIndexTop += 1, e.scrollPixelTop = e.scrollCache.y[e.scrollIndexTop];
                    for (; e.scrollPixelLeft < e.scrollBox.scrollLeft + 1 && e.scrollIndexLeft < o.length;) e.scrollPixelLeft = e.scrollCache.x[e.scrollIndexLeft], e.scrollIndexLeft += 1;
                    o.length > 0 && (e.scrollIndexLeft = Math.max(e.scrollIndexLeft - 1, 0), e.scrollPixelLeft -= e.getColummnWidth(e.orders.columns[e.scrollIndexLeft])), (e.data || []).length > 0 && (e.scrollIndexTop = Math.max(e.scrollIndexTop - 1, 0), e.scrollPixelTop = Math.max(e.scrollPixelTop - (e.data[e.scrollIndexTop] ? (e.sizes.rows[e.scrollIndexTop] || n) + (e.sizes.trees[e.scrollIndexTop] || 0) : n) * e.scale, 0)), e.ellipsisCache = {}, t || e.draw(!0), requestAnimationFrame(e.resizeEditInput), e.dispatchEvent("scroll", {
                        top: e.scrollBox.scrollTop,
                        left: e.scrollBox.scrollLeft
                    })
                }, e.mousemove = function (t, o) {
                    if (!e.contextMenu && !e.input) {
                        e.mouse = o || e.getLayerPos(t);
                        var r, n, l, i, a = t.ctrlKey || t.metaKey || e.attributes.persistantSelectionMode,
                            s = e.getSchema(), c = e.mouse.x, d = e.mouse.y, u = e.getCellAt(c, d),
                            h = {NativeEvent: t, cell: u, x: c, y: d}, f = e.currentCell;
                        if (clearTimeout(e.scrollTimer), e.isInGrid({
                            x: c,
                            y: d
                        }) || (e.hasFocus = !1), !e.dispatchEvent("mousemove", h) && (u && e.currentCell && (e.rowBoundaryCrossed = e.currentCell.rowIndex !== u.rowIndex, e.columnBoundaryCrossed = e.currentCell.columnIndex !== u.columnIndex, e.cellBoundaryCrossed = e.rowBoundaryCrossed || e.columnBoundaryCrossed, ["row", "column", "cell"].forEach(function (t) {
                            e[t + "BoundaryCrossed"] && (h.cell = f, e.dispatchEvent(t + "mouseout", h), h.cell = u, e.dispatchEvent(t + "mouseover", h))
                        })), e.currentCell = u, e.hasFocus)) {
                            if (e.hovers = {}, !e.draggingItem && u && -1 === e.scrollModes.indexOf(u.context) && (e.dragItem = u, e.dragMode = u.dragContext, e.cursor = u.context, "cell" === u.context && (e.cursor = "default", e.hovers = {
                                rowIndex: u.rowIndex,
                                columnIndex: u.columnIndex
                            }), (e.selecting || e.reorderObject) && "cell" === u.context)) {
                                if (i = {
                                    x: Math.abs(e.dragStart.x - c),
                                    y: Math.abs(e.dragStart.y - d)
                                }, -1 !== e.dragStartObject.columnIndex && t.shiftKey && (e.dragStartObject = {
                                    rowIndex: e.activeCell.rowIndex,
                                    columnIndex: e.activeCell.columnIndex
                                }), n = {
                                    top: Math.min(e.dragStartObject.rowIndex, u.rowIndex),
                                    left: Math.min(e.dragStartObject.columnIndex, u.columnIndex),
                                    bottom: Math.max(e.dragStartObject.rowIndex, u.rowIndex),
                                    right: Math.max(e.dragStartObject.columnIndex, u.columnIndex)
                                }, -1 === e.dragStartObject.columnIndex && (l = e.getSelectionBounds(), n.left = -1, n.right = s.length - 1, n.top = Math.min(l.top, u.rowIndex), n.bottom = Math.max(l.bottom, u.rowIndex)), e.dragStartObject.rowIndex === u.rowIndex && e.dragStartObject.columnIndex === u.columnIndex || (e.ignoreNextClick = !0), (e.cellBoundaryCrossed || 0 === i.x && 0 === i.y || "row" === e.attributes.selectionMode) && ("row" !== e.attributes.selectionMode && -1 !== e.dragStartObject.columnIndex || !e.rowBoundaryCrossed ? "row" !== e.attributes.selectionMode && (e.dragAddToSelection || void 0 === u.rowIndex ? (e.selections[u.rowIndex] = e.selections[u.rowIndex] || [], -1 === e.selections[u.rowIndex].indexOf(u.columnIndex) && e.selections[u.rowIndex].push(u.columnIndex)) : e.selections[u.rowIndex] && -1 !== e.selections[u.rowIndex].indexOf(u.columnIndex) && e.selections[u.rowIndex].splice(e.selections[u.rowIndex].indexOf(u.columnIndex), 1)) : e.selectRow(u.rowIndex, a, null, !0)), !(e.selectionBounds && n.top === e.selectionBounds.top && n.left === e.selectionBounds.left && n.bottom === e.selectionBounds.bottom && n.right === e.selectionBounds.right || a)) if (e.selections = [], l = n, "row" === e.attributes.selectionMode) for (r = l.top; r <= l.bottom; r += 1) e.selectRow(r, !0, null, !0); else -1 !== n.top && e.selectArea(l, !0);
                                e.autoScrollZone(t, c, d, a)
                            }
                            e.cellBoundaryCrossed = !1, e.rowBoundaryCrossed = !1, e.columnBoundaryCrossed = !1, e.draw(!0)
                        }
                    }
                }, e.click = function (t, o) {
                    function r() {
                        var t, o = e.getSelectionBounds();
                        l !== JSON.stringify(o) && (t = {
                            selections: e.selections,
                            selectionBounds: e.getSelectionBounds()
                        }, Object.defineProperty(t, "selectedData", {
                            get: function () {
                                return e.getSelectedData()
                            }
                        }), e.dispatchEvent("selectionchanged", t))
                    }

                    var n, l = JSON.stringify(e.getSelectionBounds()),
                        i = t.ctrlKey || t.metaKey || e.attributes.persistantSelectionMode, a = o || e.getLayerPos(t);
                    if (e.currentCell = e.getCellAt(a.x, a.y), void 0 === e.currentCell.grid) {
                        if (e.input && e.endEdit(), e.ignoreNextClick) return void(e.ignoreNextClick = !1);
                        if (n = e.currentCell, !e.dispatchEvent("click", {
                            NativeEvent: t,
                            cell: e.currentCell
                        }) && e.hasFocus) {
                            if (-1 !== ["rowHeaderCell", "columnHeaderCell"].indexOf(e.currentCell.style) || i || e.setActiveCell(n.columnIndex, n.rowIndex), "cell" === e.currentCell.context) {
                                if ("cornerCell" === e.currentCell.style) return e.selectAll(), e.draw(), void r();
                                if ("columnHeaderCell" === e.currentCell.style) {
                                    if ("sort" === e.attributes.columnHeaderClickBehavior) return e.orderBy === n.header.name ? e.orderDirection = "asc" === e.orderDirection ? "desc" : "asc" : e.orderDirection = "asc", e.order(n.header.name, e.orderDirection), void r();
                                    if ("select" === e.attributes.columnHeaderClickBehavior) return e.selectColumn(n.header.index, i, t.shiftKey), void e.draw()
                                }
                                if (e.selections[n.rowIndex] = e.selections[n.rowIndex] || [], ("row" === e.attributes.selectionMode || "rowHeaderCell" === e.currentCell.style) && "rowHeaderCell" === e.currentCell.style && e.attributes.tree && a.x > 0 && a.x - e.currentCell.x < e.style.treeArrowWidth + e.style.treeArrowMarginLeft + e.style.treeArrowMarginRight + e.style.treeArrowClickRadius && a.y - e.currentCell.y < e.style.treeArrowHeight + e.style.treeArrowMarginTop + e.style.treeArrowClickRadius && a.y > 0) return void e.toggleTree(n.rowIndex);
                                t.shiftKey && !i && (e.selectionBounds = e.getSelectionBounds(), e.selectArea(void 0, !1))
                            }
                            r(), e.draw(!0)
                        }
                    }
                }, e.dragResizeColumn = function (t) {
                    var o, r, n;
                    return o = e.getLayerPos(t), r = e.resizingStartingWidth + o.x - e.dragStart.x, n = e.resizingStartingHeight + o.y - e.dragStart.y, r < e.style.minColumnWidth && (r = e.style.minColumnWidth), n < e.style.minRowHeight && (n = e.style.minRowHeight), !e.dispatchEvent("resizecolumn", {
                        x: r,
                        y: n,
                        draggingItem: e.draggingItem
                    }) && (e.scrollBox.scrollLeft > e.scrollBox.scrollWidth - e.attributes.resizeScrollZone && "ew-resize" === e.dragMode && (e.resize(!0), e.scrollBox.scrollLeft += r), "ew-resize" === e.dragMode ? (e.sizes.columns["rowHeaderCell" === e.draggingItem.header.style ? "cornerCell" : e.draggingItem.sortColumnIndex] = r, -1 !== ["rowHeaderCell", "cornerCell"].indexOf(e.draggingItem.header.style) && e.resize(!0), void e.resizeChildGrids()) : "ns-resize" === e.dragMode ? (e.draggingItem.rowOpen ? e.sizes.trees[e.draggingItem.rowIndex] = n : e.attributes.globalRowResize ? e.style.cellHeight = n : e.sizes.rows[e.draggingItem.rowIndex] = n, e.dispatchEvent("resizerow", {row: n}), void e.resizeChildGrids()) : void(e.ellipsisCache = {}))
                }, e.stopDragResize = function () {
                    e.resize(), document.body.removeEventListener("mousemove", e.dragResizeColumn, !1), document.body.removeEventListener("mouseup", e.stopDragResize, !1), e.setStorageData(), e.draw(!0), e.ignoreNextClick = !0
                }, e.scrollGrid = function (t) {
                    var o = e.getLayerPos(t);
                    return e.attributes.scrollPointerLock && e.pointerLockPosition && -1 !== ["horizontal-scroll-box", "vertical-scroll-box"].indexOf(e.scrollStartMode) && (e.pointerLockPosition.x += t.movementX, e.pointerLockPosition.y += t.movementY, e.pointerLockPosition.x = Math.min(e.width - e.style.scrollBarWidth, Math.max(0, e.pointerLockPosition.x)), e.pointerLockPosition.y = Math.min(e.height - e.style.scrollBarWidth, Math.max(0, e.pointerLockPosition.y)), o = e.pointerLockPosition), e.scrollMode = e.getCellAt(o.x, o.y).context, "horizontal-scroll-box" === e.scrollMode && "horizontal-scroll-box" !== e.scrollStartMode ? (e.scrollStartMode = "horizontal-scroll-box", e.dragStart = o, e.scrollStart.left = e.scrollBox.scrollLeft, void clearTimeout(e.scrollTimer)) : "vertical-scroll-box" === e.scrollMode && "vertical-scroll-box" !== e.scrollStartMode ? (e.scrollStartMode = "vertical-scroll-box", e.dragStart = o, e.scrollStart.top = e.scrollBox.scrollTop, void clearTimeout(e.scrollTimer)) : ("vertical-scroll-box" === e.scrollStartMode && "vertical-scroll-box" !== e.scrollMode && (e.scrollMode = "vertical-scroll-box"), "horizontal-scroll-box" === e.scrollStartMode && "horizontal-scroll-box" !== e.scrollMode && (e.scrollMode = "horizontal-scroll-box"), clearTimeout(e.scrollTimer), void(-1 !== e.scrollModes.indexOf(e.scrollMode) && ("vertical-scroll-box" === e.scrollMode ? e.scrollBox.scrollTop = e.scrollStart.top + (o.y - e.dragStart.y) / e.scrollBox.heightBoxRatio : "vertical-scroll-top" === e.scrollMode ? (e.scrollBox.scrollTop -= e.page * e.style.cellHeight, e.scrollTimer = setTimeout(e.scrollGrid, e.attributes.scrollRepeatRate, t)) : "vertical-scroll-bottom" === e.scrollMode && (e.scrollBox.scrollTop += e.page * e.style.cellHeight, e.scrollTimer = setTimeout(e.scrollGrid, e.attributes.scrollRepeatRate, t)), "horizontal-scroll-box" === e.scrollMode ? e.scrollBox.scrollLeft = e.scrollStart.left + (o.x - e.dragStart.x) / e.scrollBox.widthBoxRatio : "horizontal-scroll-right" === e.scrollMode ? (e.scrollBox.scrollLeft += e.attributes.selectionScrollIncrement, e.scrollTimer = setTimeout(e.scrollGrid, e.attributes.scrollRepeatRate, t)) : "horizontal-scroll-left" === e.scrollMode && (e.scrollBox.scrollLeft -= e.attributes.selectionScrollIncrement, e.scrollTimer = setTimeout(e.scrollGrid, e.attributes.scrollRepeatRate, t)))))
                }, e.stopScrollGrid = function () {
                    clearTimeout(e.scrollTimer), document.exitPointerLock && document.exitPointerLock(), document.removeEventListener("mousemove", e.scrollGrid, !1)
                }, e.dragReorder = function (t) {
                    var o, r, n, l = "column-reorder" === e.dragMode, i = "row-reorder" === e.dragMode;
                    o = e.getLayerPos(t), r = o.x - e.dragStart.x, n = o.y - e.dragStart.y, !e.attributes.allowColumnReordering && l || !e.attributes.allowRowReordering && i || e.dispatchEvent("reordering", {
                        NativeEvent: t,
                        source: e.dragStartObject,
                        target: e.currentCell,
                        dragMode: e.dragMode
                    }) || (Math.abs(r) > e.attributes.reorderDeadZone || Math.abs(n) > e.attributes.reorderDeadZone) && (e.reorderObject = e.draggingItem, e.reorderTarget = e.currentCell, e.reorderObject.dragOffset = {
                        x: r,
                        y: n
                    }, e.autoScrollZone(t, l ? o.x : -1, i ? o.y : -1, !1))
                }, e.stopDragReorder = function (t) {
                    var o, r, n = {"row-reorder": e.orders.rows, "column-reorder": e.orders.columns},
                        l = {"row-reorder": "rowIndex", "column-reorder": "sortColumnIndex"}[e.dragMode];
                    document.body.removeEventListener("mousemove", e.dragReorder, !1), document.body.removeEventListener("mouseup", e.stopDragReorder, !1), e.reorderObject && e.reorderTarget && ("column-reorder" === e.dragMode && e.reorderTarget.sortColumnIndex > -1 && e.reorderTarget.sortColumnIndex < e.getSchema().length || "row-reorder" === e.dragMode && e.reorderTarget.rowIndex > -1 && e.reorderTarget.rowIndex < e.data.length) && e.reorderObject[l] !== e.reorderTarget[l] && !e.dispatchEvent("reorder", {
                        NativeEvent: t,
                        source: e.reorderObject,
                        target: e.reorderTarget,
                        dragMode: e.dragMode
                    }) && (e.ignoreNextClick = !0, o = n[e.dragMode].indexOf(e.reorderObject[l]), r = n[e.dragMode].indexOf(e.reorderTarget[l]), n[e.dragMode].splice(o, 1), n[e.dragMode].splice(r, 0, e.reorderObject[l]), "column-reorder" === e.dragMode ? e.orders.columns = n[e.dragMode] : e.orders.rows = n[e.dragMode], e.resize(), e.setStorageData()), e.reorderObject = void 0, e.reorderTarget = void 0, e.draw(!0)
                }, e.dragMove = function (t) {
                    if (!e.dispatchEvent("moving", {NativeEvent: t, cell: e.currentCell})) {
                        var o = e.getLayerPos(t);
                        e.moveOffset = {
                            x: e.currentCell.columnIndex - e.dragStartObject.columnIndex,
                            y: e.currentCell.rowIndex - e.dragStartObject.rowIndex
                        }, (Math.abs(o.x) > e.attributes.reorderDeadZone || Math.abs(o.y) > e.attributes.reorderDeadZone) && setTimeout(function () {
                            e.autoScrollZone(t, o.x, o.y, !1)
                        }, 1)
                    }
                }, e.stopDragMove = function (t) {
                    document.body.removeEventListener("mousemove", e.dragMove, !1), document.body.removeEventListener("mouseup", e.stopDragMove, !1);
                    var o = e.getSelectionBounds();
                    if (e.dispatchEvent("endmove", {
                        NativeEvent: t,
                        cell: e.currentCell
                    })) return e.movingSelection = void 0, e.moveOffset = void 0, void e.draw(!0);
                    e.moveOffset && (e.moveTo(e.movingSelection, o.left + e.moveOffset.x, o.top + e.moveOffset.y), e.moveSelection(e.moveOffset.x, e.moveOffset.y)), e.movingSelection = void 0, e.moveOffset = void 0, e.draw(!0)
                }, e.freezeMove = function (t) {
                    if (!e.dispatchEvent("freezemoving", {NativeEvent: t, cell: e.currentCell})) {
                        var o = e.getLayerPos(t);
                        e.ignoreNextClick = !0, e.freezeMarkerPosition = o, e.currentCell && void 0 !== e.currentCell.rowIndex && "frozen-row-marker" === e.dragMode && (e.scrollBox.scrollTop = 0, e.frozenRow = e.currentCell.rowIndex + 1), e.currentCell && void 0 !== e.currentCell.columnIndex && "frozen-column-marker" === e.dragMode && (e.scrollBox.scrollLeft = 0, e.frozenColumn = e.currentCell.columnIndex + 1), (Math.abs(o.x) > e.attributes.reorderDeadZone || Math.abs(o.y) > e.attributes.reorderDeadZone) && setTimeout(function () {
                            e.autoScrollZone(t, o.x, o.y, !1)
                        }, 1)
                    }
                }, e.stopFreezeMove = function (t) {
                    if (document.body.removeEventListener("mousemove", e.freezeMove, !1), document.body.removeEventListener("mouseup", e.stopFreezeMove, !1), e.freezeMarkerPosition = void 0, e.dispatchEvent("endfreezemove", {NativeEvent: t})) return e.frozenRow = e.startFreezeMove.x, e.frozenColumn = e.startFreezeMove.y, void e.draw(!0);
                    e.draw(!0)
                }, e.mousedown = function (t, o) {
                    if (e.lastMouseDownTarget = t.target, !e.dispatchEvent("mousedown", {
                        NativeEvent: t,
                        cell: e.currentCell
                    }) && e.hasFocus && 2 !== t.button && !e.input) {
                        var r = t.ctrlKey || t.metaKey, n = /-move/.test(e.dragMode),
                            l = /frozen-row-marker|frozen-column-marker/.test(e.dragMode),
                            i = /-resize/.test(e.dragMode);
                        if (e.dragStart = o || e.getLayerPos(t), e.scrollStart = {
                            left: e.scrollBox.scrollLeft,
                            top: e.scrollBox.scrollTop
                        }, e.dragStartObject = e.getCellAt(e.dragStart.x, e.dragStart.y), e.dragAddToSelection = !e.dragStartObject.selected, r || t.shiftKey || /(vertical|horizontal)-scroll-(bar|box)/.test(e.dragStartObject.context) || !e.currentCell || e.currentCell.isColumnHeader || n || l || i || (e.selections = []), !e.dragStartObject.isGrid) {
                            if (-1 !== e.scrollModes.indexOf(e.dragStartObject.context)) return e.scrollMode = e.dragStartObject.context, e.scrollStartMode = e.dragStartObject.context, e.scrollGrid(t), e.attributes.scrollPointerLock && -1 !== ["horizontal-scroll-box", "vertical-scroll-box"].indexOf(e.scrollStartMode) && (e.pointerLockPosition = {
                                x: e.dragStart.x,
                                y: e.dragStart.y
                            }, e.canvas.requestPointerLock()), document.addEventListener("mousemove", e.scrollGrid, !1), document.addEventListener("mouseup", e.stopScrollGrid, !1), void(e.ignoreNextClick = !0);
                            if ("cell" === e.dragMode) return e.selecting = !0, void(("row" === e.attributes.selectionMode || -1 === e.dragStartObject.columnIndex) && e.dragStartObject.rowIndex > -1 ? e.selectRow(e.dragStartObject.rowIndex, r, null) : "row" !== e.attributes.selectionMode && e.mousemove(t));
                            if (n) {
                                if (e.draggingItem = e.dragItem, e.movingSelection = e.selections.concat([]), e.dragging = e.dragStartObject, e.dispatchEvent("beginmove", {
                                    NativeEvent: t,
                                    cell: e.currentCell
                                })) return;
                                return document.body.addEventListener("mousemove", e.dragMove, !1), document.body.addEventListener("mouseup", e.stopDragMove, !1), e.mousemove(t)
                            }
                            if (l) {
                                if (e.draggingItem = e.dragItem, e.startFreezeMove = {
                                    x: e.frozenRow,
                                    y: e.frozenColumn
                                }, e.dispatchEvent("beginfreezemove", {NativeEvent: t})) return;
                                return document.body.addEventListener("mousemove", e.freezeMove, !1), document.body.addEventListener("mouseup", e.stopFreezeMove, !1), e.mousemove(t)
                            }
                            return i ? (e.draggingItem = e.dragItem, e.draggingItem.rowOpen ? e.resizingStartingHeight = e.sizes.trees[e.draggingItem.rowIndex] : e.resizingStartingHeight = e.sizes.rows[e.draggingItem.rowIndex] || e.style.cellHeight, e.resizingStartingWidth = e.sizes.columns["rowHeaderCell" === e.draggingItem.header.style ? "cornerCell" : e.draggingItem.sortColumnIndex] || e.draggingItem.width, document.body.addEventListener("mousemove", e.dragResizeColumn, !1), void document.body.addEventListener("mouseup", e.stopDragResize, !1)) : -1 !== ["row-reorder", "column-reorder"].indexOf(e.dragMode) ? (e.draggingItem = e.dragStartObject, document.body.addEventListener("mousemove", e.dragReorder, !1), void document.body.addEventListener("mouseup", e.stopDragReorder, !1)) : void 0
                        }
                    }
                }, e.mouseup = function (t) {
                    clearTimeout(e.scrollTimer), e.cellBoundaryCrossed = !0, e.rowBoundaryCrossed = !0, e.columnBoundaryCrossed = !0, e.selecting = void 0, e.draggingItem = void 0, e.dragStartObject = void 0, e.dispatchEvent("mouseup", {
                        NativeEvent: t,
                        cell: e.currentCell
                    }) || (e.hasFocus || t.target === e.canvas) && (e.currentCell && void 0 !== e.currentCell.grid || e.contextMenu || e.input || (e.dragStart && e.isInGrid(e.dragStart) && e.controlInput.focus(), t.preventDefault()))
                }, e.getAdjacentCells = function () {
                    var t, o, r = e.getSchema(), n = {};
                    for (t = 0; t < r.length; t += 1) o = e.orders.columns[t], r[o].hidden || (void 0 === n.first && (n.first = t, n.left = t), n.last = t, t > e.activeCell.columnIndex && void 0 === n.right && (n.right = t), t < e.activeCell.columnIndex && (n.left = t));
                    return void 0 === n.right && (n.right = n.last), n
                }, e.keydown = function (t) {
                    var o, r, n = e.getAdjacentCells(), l = e.activeCell.columnIndex, i = e.activeCell.rowIndex,
                        a = t.ctrlKey || t.metaKey, s = e.data.length - 1, c = e.getSchema(), d = c.length - 1;
                    if (!e.dispatchEvent("keydown", {NativeEvent: t, cell: e.currentCell}) && e.hasFocus) {
                        if (e.attributes.showNewRow && (s += 1), 9 === t.keyCode && t.preventDefault(), 27 === t.keyCode ? (e.selections = [], e.draw(!0)) : a && 65 === t.keyCode ? e.selectAll() : 40 === t.keyCode ? i += 1 : 38 === t.keyCode ? i -= 1 : 37 === t.keyCode || t.shiftKey && 9 === t.keyCode ? l = n.left : 39 === t.keyCode || !t.shiftKey && 9 === t.keyCode ? l = n.right : 33 === t.keyCode ? (i -= e.page, t.preventDefault()) : 34 === t.keyCode ? (i += e.page, t.preventDefault()) : 36 === t.keyCode || a && 38 === t.keyCode ? i = 0 : 35 === t.keyCode || a && 40 === t.keyCode ? i = e.data.length - 1 : a && 39 === t.keyCode ? l = n.last : a && 37 === t.keyCode && (l = n.first), 13 === t.keyCode) return e.beginEditAt(l, i, t);
                        if (32 === t.keyCode) {
                            if (e.selections = [], e.selections[Math.max(i, 0)] = [], e.selections[Math.max(i, 0)].push(l), e.selectionBounds = e.getSelectionBounds(), "row" === e.attributes.selectionMode) for (o = e.selectionBounds.top; o <= e.selectionBounds.bottom; o += 1) e.selectRow(o, a, null, !0); else e.selectArea(void 0, a);
                            return t.preventDefault(), void e.draw(!0)
                        }
                        (l < 0 || Number.isNaN(l)) && (l = n.first), i > s && (i = s), (i < 0 || Number.isNaN(i)) && (i = 0), l > d && (l = n.last), t.shiftKey && -1 !== [37, 38, 39, 40].indexOf(t.keyCode) && (e.selections[Math.max(i, 0)] = e.selections[Math.max(i, 0)] || [], e.selections[Math.max(i, 0)].push(l), e.selectionBounds = e.getSelectionBounds(), e.selectArea(void 0, a), e.draw(!0)), l === e.activeCell.columnIndex && i === e.activeCell.rowIndex || (e.scrollIntoView(l !== e.activeCell.columnIndex ? l : void 0, i === e.activeCell.rowIndex || Number.isNaN(i) ? void 0 : i), e.setActiveCell(l, i), !t.shiftKey && e.attributes.selectionFollowsActiveCell && (a || (e.selections = []), e.selections[i] = e.selections[i] || [], e.selections[i].push(l), r = {
                            selectedData: e.getSelectedData(),
                            selections: e.selections,
                            selectionBounds: e.getSelectionBounds()
                        }, Object.defineProperty(r, "selectedData", {
                            get: function () {
                                return e.getSelectedData()
                            }
                        }), e.dispatchEvent("selectionchanged", r)), e.draw(!0))
                    }
                }, e.keyup = function (t) {
                    e.dispatchEvent("keyup", {NativeEvent: t, cell: e.currentCell}) || e.hasFocus
                }, e.keypress = function (t) {
                    e.hasFocus && e.dispatchEvent("keypress", {NativeEvent: t, cell: e.currentCell})
                }, e.dblclick = function (t) {
                    e.dispatchEvent("dblclick", {
                        NativeEvent: t,
                        cell: e.currentCell
                    }) || e.hasFocus && ("ew-resize" === e.currentCell.context && "columnHeaderCell" === e.currentCell.style ? e.fitColumnToValues(e.currentCell.header.name) : "ew-resize" === e.currentCell.context && "cornerCell" === e.currentCell.style ? e.autosize() : -1 !== ["cell", "activeCell"].indexOf(e.currentCell.style) && e.beginEditAt(e.currentCell.columnIndex, e.currentCell.rowIndex))
                }, e.scrollWheel = function (o) {
                    var r, n, l = o, i = void 0 === o.deltaX ? o.NativeEvent.deltaX : o.deltaX,
                        a = void 0 === o.deltaY ? o.NativeEvent.deltaY : o.deltaY,
                        s = void 0 === o.deltaMode ? o.NativeEvent.deltaMode : o.deltaMode;
                    if (!t && !e.dispatchEvent("wheel", {NativeEvent: o})) {
                        var o = o.NativeEvent || o;
                        e.touchHaltAnimation = !0, r = e.scrollBox.scrollLeft, n = e.scrollBox.scrollTop, e.hasFocus && (1 === s && (a *= 17), (e.scrollBox.scrollTop < e.scrollBox.scrollHeight && a > 0 || e.scrollBox.scrollLeft < e.scrollBox.scrollWidth && i > 0 || e.scrollBox.scrollTop > 0 && a < 0 || e.scrollBox.scrollLeft > 0 && i < 0) && l.preventDefault(o), t = setTimeout(function () {
                            t = void 0, e.scrollBox.scrollTo(i + r, a + n)
                        }, 1))
                    }
                }, e.pasteItem = function (t, o, r, n) {
                    function l(e, t, o, r, n, l) {
                        var i = t;
                        return Array.isArray(e) || null === e || "object" != typeof e || (e = Object.keys(e).map(function (t) {
                            return e[t]
                        })), /^text\/html/.test(n) && (e = e.substring(4, e.length - 5).split("</td><td>")), "string" == typeof e && (e = [e]), c[l] = [], e.forEach(function (n, a) {
                            var s = r[a + o].name;
                            if (void 0 === e[a] || null === e[a]) return void(i[s] = t[s]);
                            c[l].push(a + o), i[s] = e[a]
                        }), i
                    }

                    var i, a = e.getVisibleSchema(), s = r - 1, c = [];
                    if (/^text\/html/.test(n)) {
                        if (!/^(<meta[^>]+>)?<table>/.test(t.substring(0, 29))) return void console.warn("Unrecognized HTML format.  HTML must be a simple table, e.g.: <table><tr><td>data</td></tr></table>.  Data with the mime type text/html not in this format will not be imported as row data.");
                        t = t.substring(t.indexOf("<table><tr>") + 11, t.length - 13).split("</tr><tr>"), t = t.filter(function (e) {
                            return !/^<th>|^<thead>/.test(e)
                        })
                    } else t = t.split("\n");
                    return i = t.length, t.forEach(function (t) {
                        s += 1;
                        var r = e.orders.rows[s];
                        e.data[r] = l(t, e.data[r], o, a, n, r)
                    }), e.selections = c, i
                }, e.getNextVisibleColumnIndex = function (t) {
                    var o, r = e.getVisibleSchema();
                    for (o = 0; o < r.length; o += 1) if (r[o].columnIndex === t) return r[o + 1].columnIndex;
                    return -1
                }, e.getVisibleColumnIndexOf = function (t) {
                    var o, r = e.getVisibleSchema();
                    for (o = 0; o < r.length; o += 1) if (r[o].columnIndex === t) return o;
                    return -1
                }, e.paste = function (t) {
                    var o;
                    if (!(o = Array.prototype.filter.call(t.clipboardData.items, function (e) {
                        return "text/html" === e.type
                    })[0] || Array.prototype.filter(function (e) {
                        return "text/csv" === e.type
                    })[0] || Array.prototype.filter(function (e) {
                        return "text/plain" === e.type
                    })[0])) return void console.warn("Cannot find supported clipboard data type.  Supported types are text/html, text/csv, text/plain.");
                    !function (t) {
                        var o = t.type;
                        t.getAsString(function (t) {
                            e.pasteItem(t, e.getVisibleColumnIndexOf(e.activeCell.columnIndex), e.activeCell.rowIndex, o), e.draw()
                        })
                    }(o)
                }, e.cut = function (t) {
                    e.copy(t), e.forEachSelectedCell(function (e, t, o) {
                        e[t][o] = ""
                    })
                }, e.copy = function (t) {
                    function o(e) {
                        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    }

                    function r(e) {
                        return e = null === e || void 0 === e ? "" : e, "<td>" + ("string" == typeof e ? o(e) : e) + "</td>"
                    }

                    function n(t, r) {
                        if (!f.length || t.length < 2) return "";
                        var n = [];
                        return r && n.push("<tr>"), f.forEach(function (l, i) {
                            if (l = f[e.orders.columns[i]], !l.hidden && -1 !== t.indexOf(l.name)) {
                                var a = l.name || l.title || "";
                                r ? n.push("<th>" + o(a) + "</th>") : n.push('"' + a.replace(/"/g, '""') + '"')
                            }
                        }), n.push(r ? "</tr>" : "\n"), n.join(r ? "" : ",")
                    }

                    function l(e, t, o, n) {
                        return null !== e && !1 !== e && void 0 !== e && e.replace ? (t.push(r(e)), void o.push('"' + e.replace(/"/g, '""') + '"')) : void 0 !== e ? (o.push(e), void t.push(r(e))) : (o.push(""), void t.push("<td>&nbsp;</td>"))
                    }

                    if (!e.dispatchEvent("copy", {NativeEvent: t}) && e.hasFocus && t.clipboardData) {
                        var i, a, s, c = (e.data, []), d = [], u = {}, h = e.getSelectedData(), f = e.getSchema();
                        h.length > 0 && (h.forEach(function (t) {
                            var o = Object.keys(t);
                            if (t) {
                                var r = [], n = [], i = [];
                                f.forEach(function (t, o) {
                                    i.push(f[e.orders.columns[o]])
                                }), i.forEach(function (e, i) {
                                    -1 !== o.indexOf(e.name) && (u[e.name] = !0, l(t[e.name], r, n, e))
                                }), c.push(r.join("")), d.push(n.join(","))
                            }
                        }), s = Object.keys(u), i = n(s) + d.join("\n"), a = "<table>" + n(s, !0) + "<tr>" + c.join("</tr><tr>") + "</tr></table>", 1 === s.length && (i = i.substring(1, i.length - 1)), t.clipboardData.setData("text/html", a), t.clipboardData.setData("text/plain", i), t.clipboardData.setData("text/csv", i), t.clipboardData.setData("application/json", JSON.stringify(h)), t.preventDefault())
                    }
                }
            }
        }.apply(t, r)) && (e.exports = n)
    }, function (e, t, o) {
        var r, n;
        r = [], void 0 !== (n = function () {
            "use strict";
            return function (e) {
                function t(t) {
                    function o() {
                        var t = e.scrollBox.scrollLeft, n = e.scrollBox.scrollTop;
                        t += i ? e.attributes.selectionScrollIncrement : 0, n += s ? e.attributes.selectionScrollIncrement : 0, n -= c ? e.attributes.selectionScrollIncrement : 0, t -= a ? e.attributes.selectionScrollIncrement : 0, e.scrollBox.scrollTo(t, n), r = setTimeout(o, e.attributes.scrollRepeatRate)
                    }

                    var n, l, i, a, s, c, d, u, h;
                    if (!e.dispatchEvent("beforetouchmove", {NativeEvent: t})) {
                        if (clearTimeout(r), t.changedTouches[0] && (e.touchPosition = e.getTouchPos(t)), t.changedTouches[1] && (e.touchPosition1 = e.getTouchPos(t, 1)), Math.abs(e.touchDelta.x) + Math.abs(e.touchDelta.y) > e.attributes.touchDeadZone && clearTimeout(e.touchContextTimeout), 2 === t.touches.length && e.touchPosition && e.touchPosition1) return u = e.touchPosition.y, h = e.touchPosition1.y, e.zoomDeltaStart || (e.zoomDeltaStart = Math.abs(u - h), e.startScale = e.scale), e.touchLength = 2, e.scaleDelta = e.zoomDeltaStart - Math.abs(u - h), e.scale = e.startScale - e.scaleDelta * e.attributes.touchZoomSensitivity, e.scale = Math.min(Math.max(e.scale, e.attributes.touchZoomMin), e.attributes.touchZoomMax), e.zoomAltered = !0, e.resize(!0), void e.resizeChildGrids();
                        if (!e.zoomAltered) return e.touchLength = 1, e.touchPosition = e.touchPosition || e.touchPosition1, n = e.getColumnHeaderCellHeight(), l = e.getRowHeaderCellWidth(), i = e.width - e.style.scrollBarWidth - e.touchPosition.x < e.attributes.selectionScrollZone, a = e.touchPosition.x - l < e.attributes.selectionScrollZone, s = e.height - e.style.scrollBarWidth - e.touchPosition.y < e.attributes.selectionScrollZone, c = e.touchPosition.y - n < e.attributes.selectionScrollZone, d = e.style.scrollBarWidth, t.stopPropagation(), e.touchDelta = {
                            x: e.touchPosition.x - e.touchStart.x,
                            y: e.touchPosition.y - e.touchStart.y,
                            scrollLeft: e.scrollBox.scrollLeft,
                            scrollTop: e.scrollBox.scrollTop,
                            t: performance.now()
                        }, e.currentCell = e.getCellAt(e.touchPosition.x, e.touchPosition.y), e.dispatchEvent("touchmove", {
                            NativeEvent: t,
                            cell: e.currentCell
                        }), e.calculatePPS(), e.touchDuration = performance.now() - e.touchScrollStart.t, e.stopAnimation = !0, e.animationFrames = 0, e.touchSelecting && (i || a || c || s) && o(), /vertical-scroll-/.test(e.startingCell.style) ? void(e.scrollBox.scrollTop = e.scrollBox.scrollHeight * ((e.touchPosition.y - n - d) / (e.scrollBox.height - d - n))) : /horizontal-scroll-/.test(e.startingCell.style) ? void(e.scrollBox.scrollLeft = e.scrollBox.scrollWidth * ((e.touchPosition.x - l - d) / (e.scrollBox.width - d - l))) : /selection-handle-/.test(e.startingCell.style) ? void e.touchSelect(e.currentCell, e.startingCell.style) : void e.scrollBox.scrollTo(e.touchScrollStart.x - e.touchDelta.x, e.touchScrollStart.y - e.touchDelta.y)
                    }
                }

                var o, r;
                e.scrollAnimation = {}, e.touchDelta = {}, e.touchAnimateTo = {}, e.animationFrames = 0, e.getTouchPos = function (t, o) {
                    var r, n = o ? t.touches[o] : t.touches[0], l = e.canvas.getBoundingClientRect();
                    if (n) return r = {
                        x: n.clientX - l.left,
                        y: n.clientY - l.top
                    }, e.isChildGrid && (r.x -= e.canvasOffsetLeft, r.y -= e.canvasOffsetTop), {x: r.x, y: r.y, rect: l}
                }, e.easingFunctions = {
                    linear: function (e) {
                        return e
                    }, easeInQuad: function (e) {
                        return e * e
                    }, easeOutQuad: function (e) {
                        return e * (2 - e)
                    }, easeInOutQuad: function (e) {
                        return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
                    }, easeInCubic: function (e) {
                        return e * e * e
                    }, easeOutCubic: function (e) {
                        return --e * e * e + 1
                    }, easeInOutCubic: function (e) {
                        return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
                    }, easeInQuart: function (e) {
                        return e * e * e * e
                    }, easeOutQuart: function (e) {
                        return 1 - --e * e * e * e
                    }, easeInOutQuart: function (e) {
                        return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
                    }, easeInQuint: function (e) {
                        return e * e * e * e * e
                    }, easeOutQuint: function (e) {
                        return 1 + --e * e * e * e * e
                    }, easeInOutQuint: function (e) {
                        return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                    }
                }, e.easing = function (t, o, r, n) {
                    return r * e.easingFunctions[e.attributes.touchEasingMethod](t / n) + o
                }, e.calculatePPSTimed = function () {
                    e.xPPST = -(e.touchDelta.x - e.touchSigmaTimed.x) / (e.touchDelta.t - e.touchSigmaTimed.t), e.yPPST = -(e.touchDelta.y - e.touchSigmaTimed.y) / (e.touchDelta.t - e.touchSigmaTimed.t), e.touchSigmaTimed = {
                        x: e.touchDelta.x,
                        y: e.touchDelta.y,
                        t: performance.now()
                    }
                }, e.calculatePPS = function () {
                    e.xPPS = -(e.touchDelta.x - e.touchSigma.x) / (e.touchDelta.t - e.touchSigma.t), e.yPPS = -(e.touchDelta.y - e.touchSigma.y) / (e.touchDelta.t - e.touchSigma.t), e.touchSigma = {
                        x: e.touchDelta.x,
                        y: e.touchDelta.y,
                        t: performance.now()
                    }
                }, e.touchEndAnimation = function () {
                    if (!e.canvas || !e.scrollBox.scrollTo) return requestAnimationFrame(e.touchEndAnimation);
                    var t, o = performance.now(), r = e.attributes.touchReleaseAnimationDurationMs;
                    t = o - e.touchDelta.t, e.animationFrames += 1, e.scrollAnimation.x = e.easing(t, e.touchDelta.scrollLeft, e.touchAnimateTo.x, r), e.scrollAnimation.y = e.easing(t, e.touchDelta.scrollTop, e.touchAnimateTo.y, r), t > r || e.scrollAnimation.y === e.scrollBox.scrollTop && e.scrollAnimation.x === e.scrollBox.scrollLeft || e.stopAnimation || (e.scrollBox.scrollTo(e.scrollAnimation.x, e.scrollAnimation.y), requestAnimationFrame(e.touchEndAnimation))
                }, e.touchEditCell = function (t) {
                    e.beginEditAt(t.columnIndex, t.rowIndex)
                }, e.touchCell = function (t) {
                    return function () {
                        clearInterval(e.calculatePPSTimer);
                        var o, r = e.getTouchPos(t);
                        if (Math.abs(e.touchDelta.x) + Math.abs(e.touchDelta.y) < e.attributes.touchDeadZone) {
                            if (!(o = e.getCellAt(r.x, r.y))) return;
                            if (e.touchingCell && e.touchingCell.rowIndex === o.rowIndex && e.touchingCell.columnIndex === o.columnIndex) return void e.touchEditCell(o);
                            e.input && e.input.editCell && e.endEdit(), e.touchingCell = o, e.selectArea({
                                top: o.rowIndex,
                                bottom: o.rowIndex,
                                left: o.columnIndex,
                                right: o.columnIndex
                            }), e.draw(!0)
                        }
                    }
                }, e.touchstart = function (t) {
                    if (t.changedTouches[0] && (e.touchStart = e.getTouchPos(t), e.startingCell = e.getCellAt(e.touchStart.x, e.touchStart.y, !0)), !e.dispatchEvent("touchstart", {
                        NativeEvent: t,
                        cell: e.startingCell
                    })) {
                        if (e.disposeContextMenu(), clearInterval(e.calculatePPSTimer), clearTimeout(e.touchContextTimeout), e.touchStartEvent = t, e.stopAnimation = !0, e.animationFrames = 0, e.stopPropagation(t), t.preventDefault(), 1 === t.touches.length && t.changedTouches[0] && !e.zoomAltered) {
                            if (e.touchLength = 1, e.touchStart = e.touchStart || e.touchStart1, e.touchScrollStart = {
                                x: e.scrollBox.scrollLeft,
                                y: e.scrollBox.scrollTop,
                                t: performance.now()
                            }, e.touchDelta = {
                                x: 0,
                                y: 0,
                                scrollLeft: e.scrollBox.scrollLeft,
                                scrollTop: e.scrollBox.scrollTop,
                                t: e.touchScrollStart.t
                            }, e.touchSigma = {
                                x: e.touchDelta.x,
                                y: e.touchDelta.y,
                                t: e.touchDelta.t
                            }, e.touchSigmaTimed = {
                                x: e.touchDelta.x,
                                y: e.touchDelta.y,
                                t: e.touchDelta.t
                            }, e.touchContextTimeout = setTimeout(function () {
                                e.contextmenuEvent(t, e.touchStart)
                            }, e.attributes.touchContextMenuTimeMs), e.calculatePPSTimer = setInterval(e.calculatePPSTimed, 50), e.startingCell && (e.startingCell.isGrid || -1 !== ["tree", "inherit"].indexOf(e.startingCell.context))) return void(e.hasFocus = !1);
                            if (e.hasFocus = !0, e.startingCell.isHeader) return e.startingCell.isRowHeader ? (e.selectArea({
                                top: e.startingCell.rowIndex,
                                bottom: e.startingCell.rowIndex,
                                left: 0,
                                right: e.getVisibleSchema().length - 1
                            }), e.draw(!0)) : e.startingCell.isColumnHeader && ("sort" === e.attributes.columnHeaderClickBehavior && (e.orderBy === e.startingCell.header.name ? e.orderDirection = "asc" === e.orderDirection ? "desc" : "asc" : e.orderDirection = "asc", e.order(e.startingCell.header.name, e.orderDirection)), "select" === e.attributes.columnHeaderClickBehavior && (e.selectArea({
                                top: 0,
                                bottom: e.data.length - 1,
                                left: e.startingCell.columnIndex,
                                right: e.startingCell.columnIndex
                            }), e.draw(!0))), void e.touchEndEvents(t)
                        }
                        e.zoomAltered || (document.body.addEventListener("touchmove", e.touchmove, {passive: !1}), document.body.addEventListener("touchend", e.touchend, !1), document.body.addEventListener("touchcancel", e.touchcancel, !1), e.draw(!0))
                    }
                }, e.touchSelect = function (t, o) {
                    if (void 0 !== t.rowIndex && void 0 !== t.columnIndex) {
                        e.touchSelecting = !0;
                        var r = e.getSelectionBounds();
                        "selection-handle-bl" === o && t.rowIndex >= r.top && t.columnIndex <= r.right ? (r.bottom = t.rowIndex, r.left = t.columnIndex) : "selection-handle-tl" === o && t.rowIndex <= r.bottom && t.columnIndex <= r.right ? (r.top = t.rowIndex, r.left = t.columnIndex) : "selection-handle-tr" === o && t.rowIndex <= r.bottom && t.columnIndex >= r.left ? (r.top = t.rowIndex, r.right = t.columnIndex) : "selection-handle-br" === o && t.rowIndex >= r.top && t.columnIndex >= r.left && (r.bottom = t.rowIndex, r.right = t.columnIndex), "row" === e.attributes.selectionMode || -1 === t.rowIndex ? (r.left = 0, r.right = e.getSchema().length - 1) : r.left = Math.max(0, r.left), e.selectArea(r), e.draw(!0)
                    }
                }, e.touchmove = function (e) {
                    o || requestAnimationFrame(function () {
                        o = !0, t(e), o = !1
                    })
                }, e.touchEndEvents = function (t) {
                    e.zoomDeltaStart = void 0, e.touchSelecting = !1, clearInterval(e.touchScrollTimeout), clearInterval(e.touchContextTimeout), clearInterval(e.calculatePPSTimer), t.stopPropagation(), document.body.removeEventListener("touchmove", e.touchmove, {passive: !1}), document.body.removeEventListener("touchend", e.touchend, !1), document.body.removeEventListener("touchcancel", e.touchcancel, !1)
                }, e.touchend = function (t) {
                    if (!e.dispatchEvent("touchend", {NativeEvent: t, cell: e.currentCell})) {
                        if (e.zoomDeltaStart = void 0, t.changedTouches[0] && (e.touchPosition = void 0), t.changedTouches[1] && (e.touchPosition1 = void 0), e.zoomAltered) return void(0 === t.touches.length && (e.zoomAltered = !1));
                        var o = Math.abs(e.touchDelta.x) + Math.abs(e.touchDelta.y) < e.attributes.touchDeadZone;
                        isNaN(e.xPPS) && (e.xPPS = 0), isNaN(e.yPPS) && (e.yPPS = 0), isNaN(e.xPPST) && (e.xPPST = 0), isNaN(e.yPPST) && (e.yPPST = 0), e.touchAnimateTo.x = e.xPPS * e.attributes.touchReleaseAcceleration, e.touchAnimateTo.y = e.yPPS * e.attributes.touchReleaseAcceleration, e.calculatePPSTimed(), o && !e.contextMenu ? e.touchCell(e.touchStartEvent)() : 0 !== e.animationFrames || !(Math.abs(e.xPPST) > e.attributes.scrollAnimationPPSThreshold || Math.abs(e.yPPST) > e.attributes.scrollAnimationPPSThreshold) || /-scroll-/.test(e.startingCell.style) || o || (e.stopAnimation = !1, e.touchEndAnimation()), e.touchEndEvents(t)
                    }
                }, e.touchcancel = function (t) {
                    e.dispatchEvent("touchcancel", {NativeEvent: t, cell: e.currentCell}) || e.touchEndEvents(t)
                }
            }
        }.apply(t, r)) && (e.exports = n)
    }, function (e, t, o) {
        var r, n;
        r = [], void 0 !== (n = function () {
            "use strict";
            return function (e, t) {
                function o(e, t) {
                    var o, r = [];
                    for (o = e; o <= t; o += 1) r[o] = o;
                    return r
                }

                e.scale = 1, e.orders = {
                    rows: [],
                    columns: []
                }, e.appliedInlineStyles = {}, e.cellGridAttributes = {}, e.treeGridAttributes = {}, e.visibleRowHeights = [], e.hasFocus = !1, e.activeCell = {
                    columnIndex: 0,
                    rowIndex: 0
                }, e.innerHTML = "", e.storageName = "canvasDataGrid", e.invalidSearchExpClass = "canvas-datagrid-invalid-search-regExp", e.localStyleLibraryStorageKey = "canvas-datagrid-user-style-library", e.dataType = "application/x-canvas-datagrid", e.orderBy = null, e.orderDirection = "asc", e.columnFilters = {}, e.filters = {}, e.frozenRow = 0, e.frozenColumn = 0, e.ellipsisCache = {}, e.scrollCache = {
                    x: [],
                    y: []
                }, e.scrollBox = {}, e.visibleRows = [], e.sizes = {
                    rows: {},
                    columns: {},
                    trees: {}
                }, e.currentFilter = function () {
                    return !0
                }, e.selections = [], e.hovers = {}, e.attributes = {}, e.style = {}, e.formatters = {}, e.sorters = {}, e.parsers = {}, e.schemaHashes = {}, e.events = {}, e.changes = [], e.scrollIndexTop = 0, e.scrollPixelTop = 0, e.scrollIndexLeft = 0, e.scrollPixelLeft = 0, e.childGrids = {}, e.openChildren = {}, e.scrollModes = ["vertical-scroll-box", "vertical-scroll-top", "vertical-scroll-bottom", "horizontal-scroll-box", "horizontal-scroll-right", "horizontal-scroll-left"], e.componentL1Events = {}, e.eventNames = ["afterdraw", "afterrendercell", "attributechanged", "beforebeginedit", "beforecreatecellgrid", "beforedraw", "beforeendedit", "beforerendercell", "beforerendercellgrid", "beginedit", "cellmouseout", "cellmouseover", "click", "collapsetree", "contextmenu", "copy", "datachanged", "dblclick", "endedit", "expandtree", "formatcellvalue", "keydown", "keypress", "keyup", "mousedown", "mousemove", "mouseup", "newrow", "ordercolumn", "rendercell", "rendercellgrid", "renderorderbyarrow", "rendertext", "rendertreearrow", "reorder", "reordering", "resize", "resizecolumn", "resizerow", "schemachanged", "scroll", "selectionchanged", "stylechanged", "touchcancel", "touchend", "touchmove", "touchstart", "wheel"], e.mouse = {
                    x: 0,
                    y: 0
                }, e.getSelectedData = function (t) {
                    var o = [], r = e.getSchema(), n = e.data.length;
                    return 0 === n ? [] : (e.selections.forEach(function (l, i) {
                        if (l && i !== n) {
                            if (0 === l.length) return void(o[i] = null);
                            o[i] = {}, l.forEach(function (n) {
                                var l;
                                -1 !== n && r[n] && (l = e.orders.columns[n], !t && r[l].hidden || e.data[i] && (o[i][r[l].name] = e.data[i][r[l].name]))
                            })
                        }
                    }), o)
                }, e.getColumnHeaderCellHeight = function () {
                    return e.attributes.showColumnHeaders ? (e.sizes.rows[-1] || e.style.columnHeaderCellHeight) * e.scale : 0
                }, e.getRowHeaderCellWidth = function () {
                    return e.attributes.showRowHeaders ? (e.sizes.columns[-1] || e.style.rowHeaderCellWidth) * e.scale : 0
                }, e.setStorageData = function () {
                    if (e.attributes.saveAppearance && e.attributes.name) {
                        var t = {};
                        e.getSchema().forEach(function (e) {
                            t[e.name] = !e.hidden
                        }), localStorage.setItem(e.storageName + "-" + e.attributes.name, JSON.stringify({
                            sizes: {
                                rows: e.sizes.rows,
                                columns: e.sizes.columns
                            },
                            orders: {rows: e.orders.rows, columns: e.orders.columns},
                            orderBy: e.orderBy,
                            orderDirection: e.orderDirection,
                            visibility: t
                        }))
                    }
                }, e.getSchema = function () {
                    return e.schema || e.tempSchema || []
                }, e.createColumnOrders = function () {
                    var t = e.getSchema();
                    e.orders.columns = o(0, t.length - 1)
                }, e.createRowOrders = function () {
                    e.orders.rows = o(0, e.data.length - 1)
                }, e.getVisibleSchema = function () {
                    return e.getSchema().filter(function (e) {
                        return !e.hidden
                    })
                }, e.applyDefaultValue = function (t, o) {
                    var r = o.defaultValue || "";
                    "function" == typeof r && (r = r.apply(e.intf, [o])), t[o.name] = r
                }, e.createNewRowData = function () {
                    e.newRow = {}, e.getSchema().forEach(function (t) {
                        e.applyDefaultValue(e.newRow, t)
                    })
                }, e.getSchemaNameHash = function (t) {
                    for (var o = 0; e.schemaHashes[t];) o += 1, t += o;
                    return t
                }, e.filter = function (t) {
                    var o = e.filters[t];
                    return o || void 0 === t || (console.warn("Cannot find filter for type %s, falling back to substring match.", t), o = e.filters.string), o
                }, e.getBestGuessDataType = function (e, t) {
                    var o, r, n = t.length;
                    for (r = 0; r < n; r += 1) if (void 0 !== t[r] && null !== t[r] && -1 !== [null, void 0].indexOf(t[r][e])) return o = typeof t[r], "object" === o ? "string" : o;
                    return "string"
                }, e.drawChildGrids = function () {
                    Object.keys(e.childGrids).forEach(function (t) {
                        e.childGrids[t].draw()
                    })
                }, e.resizeChildGrids = function () {
                    Object.keys(e.childGrids).forEach(function (t) {
                        e.childGrids[t].resize()
                    })
                }, e.autoScrollZone = function (t, o, r, n) {
                    var l, i = e.getRowHeaderCellWidth(), a = e.getColumnHeaderCellHeight();
                    -1 !== r && (o > e.width - e.attributes.selectionScrollZone && o < e.width && (e.scrollBox.scrollLeft += e.attributes.selectionScrollIncrement, l = !0), o - e.attributes.selectionScrollZone - i < 0 && (e.scrollBox.scrollLeft -= e.attributes.selectionScrollIncrement, l = !0)), -1 !== r && (r > e.height - e.attributes.selectionScrollZone && r < e.height && (e.scrollBox.scrollTop += e.attributes.selectionScrollIncrement, l = !0), r - e.attributes.selectionScrollZone - a < 0 && (e.scrollBox.scrollTop -= e.attributes.selectionScrollIncrement, l = !0)), l && !n && e.currentCell && -1 !== e.currentCell.columnIndex && (e.scrollTimer = setTimeout(e.mousemove, e.attributes.scrollRepeatRate, t))
                }, e.refreshFromOrigialData = function () {
                    e.data = e.originalData.filter(function (e) {
                        return !0
                    })
                }, e.validateColumn = function (e, t) {
                    if (!e.name) throw new Error("A column must contain at least a name.");
                    if (t.filter(function (t) {
                        return t.name === e.name
                    }).length > 0) throw new Error("A column with the name " + e.name + " already exists and cannot be added again.");
                    return !0
                }, e.setDefaults = function (e, t, o, r) {
                    e[o] = void 0 === t[o] ? r : t[o]
                }, e.setAttributes = function () {
                    e.defaults.attributes.forEach(function (t) {
                        e.setDefaults(e.attributes, e.args, t[0], t[1])
                    })
                }, e.setStyle = function () {
                    e.defaults.styles.forEach(function (t) {
                        e.setDefaults(e.style, e.args.style || {}, t[0], t[1])
                    })
                }, e.autosize = function (t) {
                    e.getVisibleSchema().forEach(function (o, r) {
                        o.name !== t && void 0 !== t || (e.sizes.columns[r] = e.findColumnMaxTextLength(o.name) < e.getColummnWidth(r) ? e.findColumnMaxTextLength(o.name) : Math.max(e.getColummnWidth(r), e.style.minColumnWidth))
                    }), e.sizes.columns[-1] = e.findColumnMaxTextLength("cornerCell")
                }, e.dispose = function () {
                    !e.isChildGrid && e.canvas && e.canvas.parentNode && e.canvas.parentNode.removeChild(e.canvas), e.isChildGrid || document.body.removeChild(e.controlInput), e.eventParent.removeEventListener("mouseup", e.mouseup, !1), e.eventParent.removeEventListener("mousedown", e.mousedown, !1), e.eventParent.removeEventListener("dblclick", e.dblclick, !1), e.eventParent.removeEventListener("click", e.click, !1), e.eventParent.removeEventListener("mousemove", e.mousemove), e.eventParent.removeEventListener("wheel", e.scrollWheel, !1), e.canvas.removeEventListener("contextmenu", e.contextmenu, !1), e.canvas.removeEventListener("copy", e.copy), e.controlInput.removeEventListener("copy", e.copy), e.controlInput.removeEventListener("cut", e.cut), e.controlInput.removeEventListener("paste", e.paste), e.controlInput.removeEventListener("keypress", e.keypress, !1), e.controlInput.removeEventListener("keyup", e.keyup, !1), e.controlInput.removeEventListener("keydown", e.keydown, !1), window.removeEventListener("resize", e.resize), e.observer && e.observer.disconnect && e.observer.disconnect()
                }, e.tryLoadStoredSettings = function () {
                    var t;
                    e.reloadStoredValues(), e.storedSettings && "object" == typeof e.storedSettings.orders && null !== e.storedSettings.orders && (e.storedSettings.orders.rows.length >= (e.data || []).length && (e.orders.rows = e.storedSettings.orders.rows), t = e.getSchema(), e.storedSettings.orders.columns.length === t.length && (e.orders.columns = e.storedSettings.orders.columns), e.orderBy = void 0 === e.storedSettings.orderBy ? t[0].name : e.storedSettings.orderBy, e.orderDirection = void 0 === e.storedSettings.orderDirection ? "asc" : e.storedSettings.orderDirection, void 0 !== e.storedSettings.orderBy && e.getHeaderByName(e.orderBy) && e.orderDirection && e.order(e.orderBy, e.orderDirection))
                }, e.getDomRoot = function () {
                    return e.shadowRoot ? e.shadowRoot.host : e.parentNode
                }, e.getFontName = function (e) {
                    return e.replace(/\d+\.?\d*px/, "")
                }, e.getFontHeight = function (e) {
                    return parseFloat(e, 10)
                }, e.parseStyleValue = function (t) {
                    if (/Font/.test(t)) return e.style[t + "Height"] = e.getFontHeight(e.style[t]), void(e.style[t + "Name"] = e.getFontName(e.style[t]));
                    "moveOverlayBorderSegments" === t && "string" == typeof e.style[t] && (e.style[t] = e.style[t].split(",").map(function (e) {
                        return parseInt(e, 10)
                    }))
                }, e.initProp = function (t) {
                    e.args[t] && Object.keys(e.args[t]).forEach(function (o) {
                        e[t][o] = e.args[t][o]
                    })
                }, e.getStyleProperty = function (t) {
                    return -1 === e.styleKeys.indexOf(t) ? e.parentNodeStyle[t] : e.style[t]
                }, e.setStyleProperty = function (t, o, r) {
                    var n = -1 !== ["height", "width", "minHeight", "minWidth", "maxHeight", "maxWidth"].indexOf(t);
                    -1 === e.styleKeys.indexOf(t) ? e.parentNodeStyle[t] = o : (/-/.test(t) && (t = e.dehyphenateProperty(t)), e.style[t] = o, e.parseStyleValue(t)), n && e.resize(), r || (e.draw(!0), e.dispatchEvent("stylechanged", {
                        name: "style",
                        value: o
                    }))
                }, e.reloadStoredValues = function () {
                    if (e.attributes.name && e.attributes.saveAppearance) {
                        try {
                            e.storedSettings = localStorage.getItem(e.storageName + "-" + e.attributes.name)
                        } catch (t) {
                            console.warn("Error loading stored values. " + t.message), e.storedSettings = void 0
                        }
                        if (e.storedSettings) try {
                            e.storedSettings = JSON.parse(e.storedSettings)
                        } catch (t) {
                            console.warn("could not read settings from localStore", t), e.storedSettings = void 0
                        }
                        e.storedSettings && ("object" == typeof e.storedSettings.sizes && null !== e.storedSettings.sizes && (e.sizes.rows = e.storedSettings.sizes.rows, e.sizes.columns = e.storedSettings.sizes.columns, ["trees", "columns", "rows"].forEach(function (t) {
                            e.sizes[t] || (e.sizes[t] = {})
                        })), "object" == typeof e.storedSettings.visibility && e.getSchema().forEach(function (t) {
                            e.storedSettings.visibility && void 0 !== e.storedSettings.visibility[t.name] && (t.hidden = !e.storedSettings.visibility[t.name])
                        }))
                    }
                }, e.init = function () {
                    function t(t) {
                        -1 === e.styleKeys.indexOf(t) && e.styleKeys.push(t)
                    }

                    if (!e.initialized) {
                        var o = {};
                        return e.setAttributes(), e.setStyle(), e.initScrollBox(), e.setDom(), e.nodeType = "canvas-datagrid", e.ie = /Trident/.test(window.navigator.userAgent), e.edge = /Edge/.test(window.navigator.userAgent), e.webKit = /WebKit/.test(window.navigator.userAgent), e.moz = /Gecko/.test(window.navigator.userAgent), e.mobile = /Mobile/i.test(window.navigator.userAgent), e.cursorGrab = "grab", e.cursorGrabing = "grabbing", e.cursorGrab = e.webKit ? "-webkit-grab" : e.cursorGrab, e.cursorGrabing = e.moz ? "-webkit-grabbing" : e.cursorGrabbing, e.pointerLockPosition = {
                            x: 0,
                            y: 0
                        }, Object.keys(e.style).forEach(e.parseStyleValue), e.intf.moveSelection = e.moveSelection, e.intf.moveTo = e.moveTo, e.intf.addEventListener = e.addEventListener, e.intf.removeEventListener = e.removeEventListener, e.intf.dispatchEvent = e.dispatchEvent, e.intf.dispose = e.dispose, e.intf.appendTo = e.appendTo, e.intf.getVisibleCellByIndex = e.getVisibleCellByIndex, e.intf.filters = e.filters, e.intf.sorters = e.sorters, e.intf.autosize = e.autosize, e.intf.beginEditAt = e.beginEditAt, e.intf.endEdit = e.endEdit, e.intf.setActiveCell = e.setActiveCell, e.intf.forEachSelectedCell = e.forEachSelectedCell, e.intf.scrollIntoView = e.scrollIntoView, e.intf.clearChangeLog = e.clearChangeLog, e.intf.gotoCell = e.gotoCell, e.intf.gotoRow = e.gotoRow, e.intf.getHeaderByName = e.getHeaderByName, e.intf.findColumnScrollLeft = e.findColumnScrollLeft, e.intf.findRowScrollTop = e.findRowScrollTop, e.intf.fitColumnToValues = e.fitColumnToValues, e.intf.findColumnMaxTextLength = e.findColumnMaxTextLength, e.intf.disposeContextMenu = e.disposeContextMenu, e.intf.getCellAt = e.getCellAt, e.intf.isCellVisible = e.isCellVisible, e.intf.isRowVisible = e.isRowVisible, e.intf.isColumnVisible = e.isColumnVisible, e.intf.order = e.order, e.intf.draw = e.draw, e.intf.isComponent = e.isComponent, e.intf.selectArea = e.selectArea, e.intf.clipElement = e.clipElement, e.intf.getSchemaFromData = e.getSchemaFromData, e.intf.setFilter = e.setFilter, e.intf.selectRow = e.selectRow, e.intf.parentGrid = e.parentGrid, e.intf.toggleTree = e.toggleTree, e.intf.expandTree = e.expandTree, e.intf.collapseTree = e.collapseTree, e.intf.canvas = e.canvas, e.intf.context = e.ctx, e.intf.insertRow = e.insertRow, e.intf.deleteRow = e.deleteRow, e.intf.addRow = e.addRow, e.intf.insertColumn = e.insertColumn, e.intf.deleteColumn = e.deleteColumn, e.intf.addColumn = e.addColumn, e.intf.getClippingRect = e.getClippingRect, e.intf.setRowHeight = e.setRowHeight, e.intf.setColumnWidth = e.setColumnWidth, e.intf.resetColumnWidths = e.resetColumnWidths, e.intf.resetRowHeights = e.resetRowHeights, e.intf.resize = e.resize, e.intf.selectColumn = e.selectColumn, e.intf.selectRow = e.selectRow, e.intf.selectAll = e.selectAll, e.intf.selectNone = e.selectNone, e.intf.drawChildGrids = e.drawChildGrids, e.intf.assertPxColor = e.assertPxColor, e.intf.clearPxColorAssertions = e.clearPxColorAssertions, e.intf.integerToAlpha = e.integerToAlpha, e.intf.copy = e.copy, e.intf.setStyleProperty = e.setStyleProperty, Object.defineProperty(e.intf, "defaults", {
                            get: function () {
                                return {
                                    styles: e.defaults.styles.reduce(function (e, t) {
                                        return e[t[0]] = t[1], e
                                    }, {}), attributes: e.defaults.attributes.reduce(function (e, t) {
                                        return e[t[0]] = t[1], e
                                    }, {})
                                }
                            }
                        }), e.styleKeys = Object.keys(e.intf.defaults.styles), e.styleKeys.map(function (t) {
                            return e.hyphenateProperty(t, !1)
                        }).forEach(t), e.styleKeys.map(function (t) {
                            return e.hyphenateProperty(t, !0)
                        }).forEach(t), e.DOMStyles = window.getComputedStyle(document.body, null), e.styleKeys.concat(Object.keys(e.DOMStyles)).forEach(function (t) {
                            o[t] = void 0, Object.defineProperty(o, t, {
                                get: function () {
                                    return e.getStyleProperty(t)
                                }, set: function (o) {
                                    e.initialized && (e.appliedInlineStyles[t] = o), e.setStyleProperty(t, o)
                                }
                            })
                        }), Object.defineProperty(e.intf, "shadowRoot", {
                            get: function () {
                                return e.shadowRoot
                            }
                        }), Object.defineProperty(e.intf, "activeCell", {
                            get: function () {
                                return e.activeCell
                            }
                        }), Object.defineProperty(e.intf, "hasFocus", {
                            get: function () {
                                return e.hasFocus
                            }
                        }), Object.defineProperty(e.intf, "style", {
                            get: function () {
                                return o
                            }, set: function (t) {
                                Object.keys(t).forEach(function (o) {
                                    e.setStyleProperty(o, t[o], !0)
                                }), e.draw(!0), e.dispatchEvent("stylechanged", {name: "style", value: t})
                            }
                        }), Object.defineProperty(e.intf, "attributes", {value: {}}), Object.keys(e.attributes).forEach(function (t) {
                            Object.defineProperty(e.intf.attributes, t, {
                                get: function () {
                                    return e.attributes[t]
                                }, set: function (o) {
                                    e.attributes[t] = o, "name" === t && e.tryLoadStoredSettings(), e.draw(!0), e.dispatchEvent("attributechanged", {
                                        name: t,
                                        value: o[t]
                                    })
                                }
                            })
                        }), e.filters.string = function (t, o) {
                            t = String(t);
                            var r, n = /\/(i|g|m)*$/, l = n.exec(o), i = l ? l[0].substring(1) : "", a = i.length;
                            if (e.invalidFilterRegEx = void 0, "/" === o.substring(0, 1) && l) {
                                try {
                                    r = new RegExp(o.substring(1, o.length - (a + 1)), i)
                                } catch (t) {
                                    return void(e.invalidFilterRegEx = t)
                                }
                                return r.test(t)
                            }
                            return !!t.toString && -1 !== t.toString().toLocaleUpperCase().indexOf(o.toLocaleUpperCase())
                        }, e.filters.number = function (e, t) {
                            return !t || e === t
                        }, ["formatters", "filters", "sorters"].forEach(e.initProp), e.applyComponentStyle(!1, e.intf), e.reloadStoredValues(), e.args.data && (e.intf.data = e.args.data), (e.intf.innerText || e.intf.textContent) && ("application/x-canvas-datagrid" === e.intf.dataType && (e.intf.dataType = "application/json+x-canvas-datagrid"), e.intf.data = e.intf.innerText || e.intf.textContent), e.args.schema && (e.intf.schema = e.args.schema),e.isChildGrid || !e.isComponent ? requestAnimationFrame(function () {
                            e.resize(!0)
                        }) : e.resize(!0),e.initialized = !0,e
                    }
                }, e.intf.blur = function (t) {
                    e.hasFocus = !1
                }, e.intf.focus = function () {
                    e.hasFocus = !0, e.controlInput.focus()
                }, (e.shadowRoot || e.isChildGrid) && (Object.defineProperty(e.intf, "height", {
                    get: function () {
                        return e.shadowRoot ? e.shadowRoot.height : e.parentNode.height
                    }, set: function (t) {
                        e.shadowRoot ? e.shadowRoot.height = t : e.parentNode.height = t, e.resize(!0)
                    }
                }), Object.defineProperty(e.intf, "width", {
                    get: function () {
                        return e.shadowRoot ? e.shadowRoot.width : e.parentNode.width
                    }, set: function (t) {
                        e.shadowRoot ? e.shadowRoot.width = t : e.parentNode.width = t, e.resize(!0)
                    }
                }), Object.defineProperty(e.intf, "parentNode", {
                    get: function () {
                        return e.parentNode
                    }, set: function (t) {
                        if (!e.isChildGrid) throw new TypeError("Cannot set property parentNode which has only a getter");
                        e.parentNode = t
                    }
                })), Object.defineProperty(e.intf, "visibleRowHeights", {
                    get: function () {
                        return e.visibleRowHeights
                    }
                }), Object.defineProperty(e.intf, "openChildren", {
                    get: function () {
                        return e.openChildren
                    }
                }), Object.defineProperty(e.intf, "childGrids", {
                    get: function () {
                        return Object.keys(e.childGrids).map(function (t) {
                            return e.childGrids[t]
                        })
                    }
                }), Object.defineProperty(e.intf, "isChildGrid", {
                    get: function () {
                        return e.isChildGrid
                    }
                }), Object.defineProperty(e, "cursor", {
                    get: function () {
                        return e.parentNodeStyle.cursor
                    }, set: function (t) {
                        "cell" === t && (t = "default"), e.currentCursor !== t && (e.parentNodeStyle.cursor = t, e.currentCursor = t)
                    }
                }), Object.defineProperty(e.intf, "orderDirection", {
                    get: function () {
                        return e.orderDirection
                    }, set: function (t) {
                        "desc" !== t && (t = "asc"), e.orderDirection = t, e.order(e.orderBy, e.orderDirection)
                    }
                }), Object.defineProperty(e.intf, "orderBy", {
                    get: function () {
                        return e.orderBy
                    }, set: function (t) {
                        if (void 0 === e.getSchema().find(function (e) {
                            return e.name === t
                        })) throw new Error("Cannot sort by unknown column name.");
                        e.orderBy = t, e.order(e.orderBy, e.orderDirection)
                    }
                }), e.isComponent && (Object.defineProperty(e.intf, "offsetHeight", {
                    get: function () {
                        return e.canvas.offsetHeight
                    }
                }), Object.defineProperty(e.intf, "offsetWidth", {
                    get: function () {
                        return e.canvas.offsetWidth
                    }
                })), Object.defineProperty(e.intf, "scrollHeight", {
                    get: function () {
                        return e.scrollBox.scrollHeight
                    }
                }), Object.defineProperty(e.intf, "scrollWidth", {
                    get: function () {
                        return e.scrollBox.scrollWidth
                    }
                }), Object.defineProperty(e.intf, "scrollTop", {
                    get: function () {
                        return e.scrollBox.scrollTop
                    }, set: function (t) {
                        e.scrollBox.scrollTop = t
                    }
                }), Object.defineProperty(e.intf, "scrollLeft", {
                    get: function () {
                        return e.scrollBox.scrollLeft
                    }, set: function (t) {
                        e.scrollBox.scrollLeft = t
                    }
                }), Object.defineProperty(e.intf, "sizes", {
                    get: function () {
                        return e.sizes
                    }
                }), Object.defineProperty(e.intf, "parentDOMNode", {
                    get: function () {
                        return e.parentDOMNode
                    }
                }), Object.defineProperty(e.intf, "input", {
                    get: function () {
                        return e.input
                    }
                }), Object.defineProperty(e.intf, "controlInput", {
                    get: function () {
                        return e.controlInput
                    }
                }), Object.defineProperty(e.intf, "currentCell", {
                    get: function () {
                        return e.currentCell
                    }
                }), Object.defineProperty(e.intf, "visibleCells", {
                    get: function () {
                        return e.visibleCells
                    }
                }), Object.defineProperty(e.intf, "visibleRows", {
                    get: function () {
                        return e.visibleRows
                    }
                }), Object.defineProperty(e.intf, "selections", {
                    get: function () {
                        return e.selections
                    }
                }),Object.defineProperty(e.intf, "dragMode", {
                    get: function () {
                        return e.dragMode
                    }
                }),Object.defineProperty(e.intf, "changes", {
                    get: function () {
                        return e.changes
                    }
                }),e.intf.formatters = e.formatters,Object.defineProperty(e.intf, "dataType", {
                    get: function () {
                        return e.dataType
                    }, set: function (t) {
                        if (!e.parsers[t]) throw new Error("No parser for MIME type " + t);
                        e.dataType = t
                    }
                }),e.eventNames.forEach(function (t) {
                    Object.defineProperty(e.intf, "on" + t, {
                        get: function () {
                            return e.componentL1Events[t]
                        }, set: function (o) {
                            e.events[t] = [], e.componentL1Events[t] = o, o && e.addEventListener(t, o)
                        }
                    })
                }),Object.defineProperty(e.intf, "frozenRow", {
                    get: function () {
                        return e.frozenRow
                    }, set: function (t) {
                        if (isNaN(t)) throw new TypeError("Expected value for frozenRow to be a number.");
                        if (e.visibleRows.length < t) throw new RangeError("Cannot set a value larger than the number of visible rows.");
                        e.frozenRow = t
                    }
                }),Object.defineProperty(e.intf, "frozenColumn", {
                    get: function () {
                        return e.frozenColumn
                    }, set: function (t) {
                        if (isNaN(t)) throw new TypeError("Expected value for frozenRow to be a number.");
                        if (e.getVisibleSchema().length < t) throw new RangeError("Cannot set a value larger than the number of visible columns.");
                        e.frozenColumn = t
                    }
                }),Object.defineProperty(e.intf, "scrollIndexRect", {
                    get: function () {
                        return {
                            top: e.scrollIndexTop,
                            right: e.scrollIndexRight,
                            bottom: e.scrollIndexBottom,
                            left: e.scrollIndexLeft
                        }
                    }
                }),Object.defineProperty(e.intf, "scrollPixelRect", {
                    get: function () {
                        return {
                            top: e.scrollPixelTop,
                            right: e.scrollPixelRight,
                            bottom: e.scrollPixelBottom,
                            left: e.scrollPixelLeft
                        }
                    }
                }),Object.defineProperty(e.intf, "rowOrder", {
                    get: function () {
                        return e.orders.rows
                    }, set: function (t) {
                        if (!Array.isArray(t)) throw new TypeError("Value must be an array.");
                        if (!e.data || t.length < e.data.length) throw new RangeError("Array length must be equal to or greater than number of rows.");
                        e.orders.rows = t
                    }
                }),Object.defineProperty(e.intf, "columnOrder", {
                    get: function () {
                        return e.orders.columns
                    }, set: function (t) {
                        if (!Array.isArray(t)) throw new TypeError("Value must be an array.");
                        if (t.length < e.getSchema().length) throw new RangeError("Array length must be equal to or greater than number of columns.");
                        e.orders.columns = t
                    }
                }),Object.defineProperty(e.intf, "selectionBounds", {
                    get: function () {
                        return e.getSelectionBounds()
                    }
                }),Object.defineProperty(e.intf, "selectedRows", {
                    get: function () {
                        return e.getSelectedData(!0)
                    }
                }),Object.defineProperty(e.intf, "selectedCells", {
                    get: function () {
                        return e.getSelectedData()
                    }
                }),Object.defineProperty(e.intf, "visibleSchema", {
                    get: function () {
                        return e.getVisibleSchema().map(function (e) {
                            return e
                        })
                    }
                }),Object.defineProperty(e.intf, "treeGridAttributes", {
                    get: function () {
                        return e.treeGridAttributes
                    }, set: function (t) {
                        e.treeGridAttributes = t
                    }
                }),Object.defineProperty(e.intf, "cellGridAttributes", {
                    get: function () {
                        return e.cellGridAttributes
                    }, set: function (t) {
                        e.cellGridAttributes = t
                    }
                }),Object.defineProperty(e.intf, "ctx", {
                    get: function () {
                        return e.ctx
                    }
                }),Object.defineProperty(e.intf, "schema", {
                    get: function () {
                        return e.getSchema()
                    }, set: function (t) {
                        if (void 0 === t) return e.schema = void 0, e.tempSchema = void 0, void e.dispatchEvent("schemachanged", {schema: void 0});
                        if (!Array.isArray(t) || "object" != typeof t[0]) throw new Error("Schema must be an array of objects.");
                        if (void 0 === t[0].name) throw new Error("Expected schema to contain an object with at least a name property.");
                        e.schema = t.map(function (t, o) {
                            return t.width = t.width || e.style.cellWidth, t.filter = t.filter || e.filter(t.type), t.type = t.type || "string", t.index = o, t.columnIndex = o, t.rowIndex = -1, t
                        }), e.tempSchema = void 0, e.createNewRowData(), e.createColumnOrders(), e.tryLoadStoredSettings(), e.storedSettings && "object" == typeof e.storedSettings.visibility && e.schema.forEach(function (t, o) {
                            e.storedSettings && void 0 !== e.storedSettings.visibility[t.name] && (t.hidden = !e.storedSettings.visibility[t.name])
                        }), e.resize(!0), e.dispatchEvent("schemachanged", {schema: e.schema})
                    }
                }),e.intf.getTypes = function () {
                    return Object.keys(e.parsers)
                },e.parseInnerHtml = function (e) {
                    if (!e || /^ +$/.test(e)) return [];
                    try {
                        e = JSON.parse(e)
                    } catch (e) {
                        console.warn(Error("Cannot parse application/json+x-canvas-datagrid formated data. " + e.message + "  \nNote: canvas-datagrid.innerHTML is for string data only.  Use the canvas-datagrid.data property to set object data."))
                    }
                    return e
                },e.parsers["application/json+x-canvas-datagrid"] = function (t, o) {
                    e.parsers["application/x-canvas-datagrid"](e.parseInnerHtml(t), function (e, t) {
                        return o(e, t)
                    })
                },e.parsers["application/x-canvas-datagrid"] = function (e, t) {
                    return t(e)
                },e.intf.parsers = e.parsers,e.etl = function (t, o) {
                    if (!e.intf.parsers[e.dataType]) throw new Error("Unsupported data type.");
                    e.intf.parsers[e.dataType](t, function (t, r) {
                        Array.isArray(r) && (e.schema = r), e.attributes.autoGenerateSchema && (e.schema = e.getSchemaFromData(t)), e.schema || (e.tempSchema = e.getSchemaFromData(t)), e.getSchema() && e.createColumnOrders(), e.originalData = t, e.data = e.originalData, e.schema || 0 !== (e.data || []).length || (e.tempSchema = [{name: ""}]), e.fitColumnToValues("cornerCell", !0), (e.tempSchema && !e.schema || e.attributes.autoGenerateSchema) && (e.createColumnOrders(), e.dispatchEvent("schemachanged", {schema: e.tempSchema})), o()
                    })
                },Object.defineProperty(e.intf, "data", {
                    get: function () {
                        return e.data
                    }, set: function (t) {
                        e.etl(t, function () {
                            e.changes = [], e.createNewRowData(), e.attributes.autoResizeColumns && e.data.length > 0 && void 0 === e.storedSettings && e.autosize(), e.fitColumnToValues("cornerCell", !0), e.createRowOrders(), e.tryLoadStoredSettings(), e.dispatchEvent("datachanged", {data: e.data}), e.resize(!0)
                        })
                    }
                }),e.initScrollBox = function () {
                    function t(t, o) {
                        if (isNaN(t)) throw new Error("ScrollTop value must be a number");
                        t < 0 && (t = 0), t > a && (t = a), a < 0 && (t = 0), l = t, o || e.scroll()
                    }

                    function o(t, o) {
                        if (isNaN(t)) throw new Error("ScrollLeft value must be a number");
                        t < 0 && (t = 0), t > s && (t = s), s < 0 && (t = 0), i = t, o || e.scroll()
                    }

                    var r = 0, n = 0, l = 0, i = 0, a = 0, s = 0, c = 20, d = 20;
                    e.scrollBox.toString = function () {
                        return '{"width": ' + s.toFixed(2) + ', "height": ' + a.toFixed(2) + ', "left": ' + i.toFixed(2) + ', "top": ' + l.toFixed(2) + ', "widthRatio": ' + e.scrollBox.widthBoxRatio.toFixed(5) + ', "heightRatio": ' + e.scrollBox.heightBoxRatio.toFixed(5) + "}"
                    }, e.scrollBox.scrollTo = function (e, r, n) {
                        o(e, !0), t(r, n)
                    }, Object.defineProperty(e.scrollBox, "scrollBoxHeight", {
                        get: function () {
                            return c
                        }, set: function (e) {
                            c = e
                        }
                    }), Object.defineProperty(e.scrollBox, "scrollBoxWidth", {
                        get: function () {
                            return d
                        }, set: function (e) {
                            d = e
                        }
                    }), Object.defineProperty(e.scrollBox, "height", {
                        get: function () {
                            return r
                        }, set: function (e) {
                            r = e
                        }
                    }), Object.defineProperty(e.scrollBox, "width", {
                        get: function () {
                            return n
                        }, set: function (e) {
                            n = e
                        }
                    }), Object.defineProperty(e.scrollBox, "scrollTop", {
                        get: function () {
                            return l
                        }, set: t
                    }), Object.defineProperty(e.scrollBox, "scrollLeft", {
                        get: function () {
                            return i
                        }, set: o
                    }), Object.defineProperty(e.scrollBox, "scrollHeight", {
                        get: function () {
                            return a
                        }, set: function (e) {
                            l > e && (l = Math.max(e, 0)), a = e
                        }
                    }), Object.defineProperty(e.scrollBox, "scrollWidth", {
                        get: function () {
                            return s
                        }, set: function (e) {
                            i > e && (i = Math.max(e, 0)), s = e
                        }
                    })
                }
            }
        }.apply(t, r)) && (e.exports = n)
    }, function (e, t, o) {
        var r, n;
        r = [], void 0 !== (n = function () {
            "use strict";
            return function (e) {
                function t(t) {
                    e.createInlineStyle(t, "canvas-datagrid-context-menu-item" + (e.mobile ? "-mobile" : "")), t.addEventListener("mouseover", function () {
                        e.createInlineStyle(t, "canvas-datagrid-context-menu-item:hover")
                    }), t.addEventListener("mouseout", function () {
                        e.createInlineStyle(t, "canvas-datagrid-context-menu-item")
                    })
                }

                function o(r, n, a, s) {
                    function c() {
                        a.forEach(function (n) {
                            function l(e) {
                                e.relatedTarget === m || n.contextMenu.container === e.relatedTarget || s === e.relatedTarget || c === e.relatedTarget || n.contextMenu.container.contains(e.relatedTarget) || (n.contextMenu.dispose(), y.splice(y.indexOf(n.contextMenu), 1), n.contextMenu = void 0, c.removeEventListener("mouseout", l), m.removeEventListener("mouseout", l), c.setAttribute("contextOpen", "0"), c.setAttribute("opening", "0"))
                            }

                            function i(t) {
                                if ("1" === c.getAttribute("opening") && "1" !== c.getAttribute("contextOpen")) {
                                    var i = c.getBoundingClientRect();
                                    i = {
                                        left: i.left + e.style.childContextMenuMarginLeft + m.offsetWidth,
                                        top: i.top + e.style.childContextMenuMarginTop,
                                        bottom: i.bottom,
                                        right: i.right
                                    }, n.contextMenu = o(r, i, t, w), c.setAttribute("contextOpen", "1"), c.addEventListener("mouseout", l), m.addEventListener("mouseout", l), y.push(n.contextMenu)
                                }
                            }

                            function a() {
                                var e;
                                if ("1" !== c.getAttribute("contextOpen")) {
                                    if (c.setAttribute("opening", "1"), "function" == typeof n.items) return void(void 0 !== (e = n.items.apply(w, [function (e) {
                                        i(e)
                                    }])) && Array.isArray(e) && i(e));
                                    i(n.items)
                                }
                            }

                            var s, c = document.createElement("div");
                            !function (o) {
                                function n(e) {
                                    if (null !== e) {
                                        if ("function" == typeof e) return n(e(r));
                                        if ("object" == typeof e) return void c.appendChild(e);
                                        t(c), c.innerHTML = e
                                    }
                                }

                                n(o.title), o.contextItemContainer = c, (o.items && o.items.length > 0 || "function" == typeof o.items) && (s = document.createElement("div"), e.createInlineStyle(s, "canvas-datagrid-context-child-arrow"), s.innerHTML = e.style.childContextMenuArrowHTML, c.appendChild(s), c.addEventListener("mouseover", a), c.addEventListener("mouseout", function () {
                                    c.setAttribute("opening", "0")
                                })), o.click && c.addEventListener("click", function (t) {
                                    o.click.apply(e, [t])
                                })
                            }(n), m.appendChild(c)
                        })
                    }

                    function d(e) {
                        a[e].contextItemContainer.dispatchEvent(new Event("click"))
                    }

                    function u() {
                        m.scrollTop > 0 ? e.parentDOMNode.appendChild(x) : x.parentNode && x.parentNode.removeChild(x), m.scrollTop >= m.scrollHeight - m.offsetHeight && p.parentNode ? p.parentNode.removeChild(p) : m.scrollHeight - m.offsetHeight > 0 && !(m.scrollTop >= m.scrollHeight - m.offsetHeight) && e.parentDOMNode.appendChild(p)
                    }

                    function h(t) {
                        return function o() {
                            var r = e.attributes.contextHoverScrollAmount;
                            "up" === t && 0 === m.scrollTop || "down" === t && m.scrollTop === m.scrollHeight || (m.scrollTop += "up" === t ? -r : r, i = setTimeout(o, e.attributes.contextHoverScrollRateMs, t))
                        }
                    }

                    function f(e) {
                        return function () {
                            clearTimeout(i)
                        }
                    }

                    var g, m = document.createElement("div"), x = document.createElement("div"),
                        p = document.createElement("div"), y = [], v = -1, w = {};
                    if (!Array.isArray(a)) throw new Error("createContextMenu expects an array.");
                    return w.parentGrid = e.intf, w.parentContextMenu = s, w.container = m, function () {
                        var t = {}, o = e.scrollOffset(e.canvas);
                        void 0 === l && (l = e.style.contextMenuZIndex), c(), e.createInlineStyle(m, "canvas-datagrid-context-menu" + (e.mobile ? "-mobile" : "")), t.x = n.left - o.left, t.y = n.top - o.top, t.height = 0, l += 1, m.style.position = "absolute", x.style.color = e.style.contextMenuArrowColor, p.style.color = e.style.contextMenuArrowColor, [x, p].forEach(function (e) {
                            e.style.textAlign = "center", e.style.position = "absolute", e.style.zIndex = l + 1
                        }), m.style.zIndex = l, s && s.inputDropdown && (m.style.maxHeight = window.innerHeight - t.y - e.style.autocompleteBottomMargin + "px", m.style.minWidth = n.width + "px", t.y += n.height), e.mobile && (m.style.width = n.width + "px"), m.style.left = t.x + "px", m.style.top = t.y + "px", m.addEventListener("scroll", u), m.addEventListener("wheel", function (t) {
                            e.hasFocus && (m.scrollTop += t.deltaY, m.scrollLeft += t.deltaX), u()
                        }), x.innerHTML = e.style.contextMenuArrowUpHTML, p.innerHTML = e.style.contextMenuArrowDownHTML, m.appendChild(x), document.body.appendChild(p), document.body.appendChild(m), g = m.getBoundingClientRect(), g.bottom > window.innerHeight && (s && s.inputDropdown || (t.y -= g.bottom + e.style.contextMenuWindowMargin - window.innerHeight), t.y < 0 && (t.y = e.style.contextMenuWindowMargin), m.offsetHeight > window.innerHeight - e.style.contextMenuWindowMargin && (m.style.height = window.innerHeight - 2 * e.style.contextMenuWindowMargin + "px")), g.right > window.innerWidth && (t.x -= g.right - window.innerWidth + e.style.contextMenuWindowMargin), t.x < 0 && (t.x = e.style.contextMenuWindowMargin), t.y < 0 && (t.y = e.style.contextMenuWindowMargin), m.style.left = t.x + "px", m.style.top = t.y + "px", g = m.getBoundingClientRect(), x.style.top = g.top + "px", p.style.top = g.top + g.height - p.offsetHeight + "px", x.style.left = g.left + "px", p.style.left = g.left + "px", p.style.width = m.offsetWidth + "px", x.style.width = m.offsetWidth + "px", p.addEventListener("mouseover", h("down")), p.addEventListener("mouseout", f("down")), x.addEventListener("mouseover", h("up")), x.addEventListener("mouseout", f("up")), u()
                    }(), w.clickIndex = d, w.rect = g, w.items = a, w.upArrow = x, w.downArrow = p, w.dispose = function () {
                        clearTimeout(i), y.forEach(function (e) {
                            e.dispose()
                        }), [p, x, m].forEach(function (e) {
                            e.parentNode && e.parentNode.removeChild(e)
                        })
                    }, Object.defineProperty(w, "selectedIndex", {
                        get: function () {
                            return v
                        }, set: function (t) {
                            if ("number" != typeof t || isNaN(t || !isFinite(t))) throw new Error("Context menu selected index must be a sane number.");
                            v = t, v > a.length - 1 && (v = a.length - 1), v < 0 && (v = 0), a.forEach(function (t, o) {
                                if (o === v) return e.createInlineStyle(t.contextItemContainer, "canvas-datagrid-context-menu-item:hover");
                                e.createInlineStyle(t.contextItemContainer, "canvas-datagrid-context-menu-item")
                            })
                        }
                    }), w
                }

                function r(t) {
                    function r() {
                        h.style.background = e.style.contextFilterInputBackground, h.style.color = e.style.contextFilterInputColor,
                        e.invalidFilterRegEx && (h.style.background = e.style.contextFilterInvalidRegExpBackground, h.style.color = e.style.contextFilterInvalidRegExpColor)
                    }

                    function n() {
                        var o = 0;
                        i = {}, e.data.forEach(function (r) {
                            var n = r[t.cell.header.name];
                            i[n] || o > e.attributes.maxAutoCompleteItems || (o += 1, i[n] = {
                                title: e.formatters[t.cell.header.type || "string"]({cell: {value: n}}),
                                click: function (t) {
                                    h.value = n, t.stopPropagation(), h.dispatchEvent(new Event("keyup")), e.disposeAutocomplete()
                                }
                            })
                        }), i = Object.keys(i).map(function (e) {
                            return i[e]
                        })
                    }

                    function l(e) {
                        e && -1 !== [40, 38, 13, 9].indexOf(e.keyCode) || (n(), s = h.getBoundingClientRect(), a && (a.dispose(), a = void 0), a = o(t, {
                            left: s.left,
                            top: s.top,
                            right: s.right,
                            bottom: s.bottom,
                            height: s.height,
                            width: s.width
                        }, i, {inputDropdown: !0}), a.selectedIndex = 0)
                    }

                    function f1(columnFilters) {
                        if (typeof columnFilters === "string") {
                            var pos = columnFilters.indexOf("t"), start = columnFilters.substring(0, pos),
                                end = columnFilters.substring(pos + 1, columnFilters.length);
                            return [start, end]
                        }
                        else
                            return ["", ""]
                    }

                    var i, s, c = document.createElement("div"), d = document.createElement("div"),
                        u = document.createElement("button"),
                        h = document.createElement("input"), d1 = document.createElement("div"),
                        h1 = document.createElement("input"),
                        f = t.cell && t.cell.header ? t.cell.header.title || t.cell.header.name : "";
                    var h_value = "", h1_value = "";

                    if (t.cell.header.title === "金额（万元）") {
                        e.createInlineStyle(d, "canvas-datagrid-context-menu-label"), e.createInlineStyle(d1, "canvas-datagrid-context-menu-label"),
                            e.createInlineStyle(h, "canvas-datagrid-context-menu-filter-input1"), e.createInlineStyle(h1, "canvas-datagrid-context-menu-filter-input1"),
                            r(), h.onclick = e.disposeAutocomplete, h.addEventListener("keyup", function () {
                            h_value = h.value;
                            parseFloat(h_value) <= parseFloat(h1_value) || h1_value === "" ? e.setFilter(t.cell.header.name, h_value + "t" + h1_value) : e.setFilter(t.cell.header.name, "t" + h1_value)
                        }), h.value = t.cell.header ? f1(e.columnFilters[t.cell.header.name])[0] || "" : "", h1.onclick = e.disposeAutocomplete, h1.addEventListener("keyup", function () {
                            h1_value = h1.value;
                            parseFloat(h1_value) >= parseFloat(h_value) || h_value === "" ? e.setFilter(t.cell.header.name, h_value + "t" + h1_value) : e.setFilter(t.cell.header.name, h_value + "t")
                        }), h1.value = t.cell.header ? f1(e.columnFilters[t.cell.header.name])[1] || "" : "", d.innerHTML = e.attributes.filterOptionText.replace(/%s/g, f), d1.innerHTML = "至",
                            c.addEventListener("click", function (e) {
                                return e.stopPropagation()
                            }), c.appendChild(d), c.appendChild(h), c.appendChild(d1), c.appendChild(h1), t.items.push({title: c}), Object.keys(e.columnFilters).length && Object.keys(e.columnFilters).forEach(function (o) {
                            var r = e.getHeaderByName(o);
                            t.items.push({
                                title: e.attributes.removeFilterOptionText.replace(/%s/g, r.title || r.name),
                                click: function (t) {
                                    t.preventDefault(), e.setFilter(o, ""), e.disposeContextMenu(), e.controlInput.focus()
                                }
                            })
                        })
                    } else {
                        e.createInlineStyle(d, "canvas-datagrid-context-menu-label"), e.createInlineStyle(u, "canvas-datagrid-context-menu-filter-button"),
                            e.createInlineStyle(h, "canvas-datagrid-context-menu-filter-input"), r(), h.onclick = e.disposeAutocomplete, h.addEventListener("keydown", function (t) {
                            40 === t.keyCode && (a.selectedIndex += 1), 38 === t.keyCode && (a.selectedIndex -= 1), 13 === t.keyCode && (a.clickIndex(a.selectedIndex),
                                e.disposeContextMenu()), 9 === t.keyCode && (a.clickIndex(a.selectedIndex), t.preventDefault()), 27 === t.keyCode && e.disposeContextMenu()
                        }), h.addEventListener("keyup", function () {
                            e.setFilter(t.cell.header.name, h.value)
                        }), h.addEventListener("keyup", l), ["focus", "blur", "keydown", "keyup", "change"].forEach(function (e) {
                            h.addEventListener(e, r)
                        }), h.value = t.cell.header ? e.columnFilters[t.cell.header.name] || "" : "", d.innerHTML = e.attributes.filterOptionText.replace(/%s/g, f), u.onclick = function () {
                            if (a) return e.disposeAutocomplete();
                            l()
                        }, u.innerHTML = e.style.contextFilterButtonHTML, c.addEventListener("click", function (e) {
                            return e.stopPropagation()
                        }), c.appendChild(d), c.appendChild(h), c.appendChild(u), t.items.push({title: c}), Object.keys(e.columnFilters).length && Object.keys(e.columnFilters).forEach(function (o) {
                            var r = e.getHeaderByName(o);
                            t.items.push({
                                title: e.attributes.removeFilterOptionText.replace(/%s/g, r.title || r.name),
                                click: function (t) {
                                    t.preventDefault(), e.setFilter(o, ""), e.disposeContextMenu(), e.controlInput.focus()
                                }
                            })
                        })
                    }

                }

                function n(o) {
                    var n = !(o.cell.isBackground || o.cell.isColumnHeaderCellCap || o.cell.isScrollBar || o.cell.isCorner || o.cell.isRowHeader) && o.cell.header;
                    e.attributes.showFilter && n && r(o), e.attributes.showCopy && e.selections.reduce(function (e, t) {
                        return e + t.length
                    }, 0) > 0 && o.items.push({
                        title: e.attributes.copyText, click: function () {
                            document.execCommand("copy"), e.disposeContextMenu(), e.controlInput.focus()
                        }
                    }), e.attributes.showPaste && e.clipBoardData && o.items.push({
                        title: e.attributes.pasteText,
                        click: function () {
                            e.paste(e.clipBoardData, o.cell.columnIndex, o.cell.rowIndex), e.draw()
                        }
                    }), e.attributes.showColumnSelector && (o.items.push({
                        title: e.attributes.columnSelectorText,
                        items: function () {
                            var o = [];
                            return e.getSchema().forEach(function (r) {
                                function n(t) {
                                    r.hidden = !r.hidden, e.dispatchEvent("togglecolumn", {
                                        column: r,
                                        hidden: r.hidden
                                    }), t.preventDefault(), e.stopPropagation(t), l.innerHTML = (r.hidden ? e.attributes.columnSelectorHiddenText : e.attributes.columnSelectorVisibleText) + (r.title || r.name), e.resize(!0), e.setStorageData()
                                }

                                var l = document.createElement("div");
                                t(l), l.addEventListener("touchstart", n), l.addEventListener("click", n), l.innerHTML = (r.hidden ? e.attributes.columnSelectorHiddenText : e.attributes.columnSelectorVisibleText) + (r.title || r.name), o.push({title: l})
                            }), o
                        }
                    }), o.cell && o.cell.header && o.cell.columnIndex > -1 && o.items.push({
                        title: e.attributes.hideColumnText.replace(/%s/gi, o.cell.header.title || o.cell.header.name),
                        click: function (t) {
                            e.getSchema()[o.cell.columnIndex].hidden = !0, t.preventDefault(), e.stopPropagation(t), e.disposeContextMenu(), e.setStorageData(), setTimeout(function () {
                                e.resize(!0)
                            }, 10)
                        }
                    })), e.attributes.saveAppearance && e.attributes.showClearSettingsOption && (Object.keys(e.sizes.rows).length > 0 || Object.keys(e.sizes.columns).length > 0) && o.items.push({
                        title: e.attributes.clearSettingsOptionText,
                        click: function (t) {
                            t.preventDefault(), e.sizes.rows = {}, e.sizes.columns = {}, e.createRowOrders(), e.createColumnOrders(), e.storedSettings = void 0, e.dispatchEvent("resizecolumn", {columnWidth: e.style.cellWidth}), e.dispatchEvent("resizerow", {cellHeight: e.style.cellHeight}), e.setStorageData(), e.resize(!0), e.disposeContextMenu(), e.controlInput.focus()
                        }
                    }), e.attributes.allowSorting && e.attributes.showOrderByOption && n && (o.items.push({
                        title: e.attributes.showOrderByOptionTextAsc.replace("%s", o.cell.header.title || o.cell.header.name),
                        click: function (t) {
                            t.preventDefault(), e.order(o.cell.header.name, "asc"), e.controlInput.focus()
                        }
                    }), o.items.push({
                        title: e.attributes.showOrderByOptionTextDesc.replace("%s", o.cell.header.title || o.cell.header.name),
                        click: function (t) {
                            t.preventDefault(), e.order(o.cell.header.name, "desc"), e.disposeContextMenu(), e.controlInput.focus()
                        }
                    }))
                }

                var l, i, a;
                e.disposeAutocomplete = function () {
                    a && (a.dispose(), a = void 0)
                }, e.disposeContextMenu = function () {
                    document.removeEventListener("click", e.disposeContextMenu), l = e.style.contextMenuZIndex, e.disposeAutocomplete(), e.contextMenu && e.contextMenu.dispose(), e.contextMenu = void 0
                }, e.contextmenuEvent = function (t, r) {
                    function l() {
                        requestAnimationFrame(function () {
                            document.addEventListener("click", e.disposeContextMenu), document.removeEventListener("mouseup", l)
                        })
                    }

                    if (e.hasFocus || t.target === e.canvas) {
                        var i, a = [], s = r || e.getLayerPos(t),
                            c = {NativeEvent: t, cell: e.getCellAt(s.x, s.y), items: a};
                        c.cell.isGrid || n(c), e.dispatchEvent("contextmenu", c) || c.cell.isGrid || (e.contextMenu && e.disposeContextMenu(), i = {
                            left: s.x + s.rect.left + e.style.contextMenuMarginLeft + e.canvasOffsetLeft,
                            top: s.y + s.rect.top + e.style.contextMenuMarginTop + e.canvasOffsetTop,
                            right: c.cell.width + c.cell.x + s.rect.left,
                            bottom: c.cell.height + c.cell.y + s.rect.top,
                            height: c.cell.height,
                            width: c.cell.width
                        }, e.mobile && (i.left = e.style.mobileContextMenuMargin + "px", i.width = e.width - 2 * e.style.mobileContextMenuMargin + "px"), e.contextMenu = o(c, i, a), document.addEventListener("mouseup", l), t.preventDefault())
                    }
                }
            }
        }.apply(t, r)) && (e.exports = n)
    }, function (e, t, o) {
        var r, n;
        r = [], void 0 !== (n = function () {
            "use strict";
            return function (e) {
                e.getClippingRect = function (t) {
                    var o = e.position(e.parentNode), r = e.position(t), n = e.scrollOffset(e.canvas),
                        l = {x: 0, y: 0, h: 0, w: 0}, i = {x: -1 / 0, y: -1 / 0, h: 1 / 0, w: 1 / 0},
                        a = e.getColumnHeaderCellHeight(), s = e.getRowHeaderCellWidth();
                    return o.top -= n.top, o.left -= n.left, r.top -= n.top, r.left -= n.left, l.h = o.top + o.height - t.offsetTop - e.style.scrollBarWidth, l.w = o.left + o.width - t.offsetLeft - e.style.scrollBarWidth, l.x = o.left + -1 * r.left + s, l.y = o.top + -1 * r.top + a, {
                        x: l.x > i.x ? l.x : i.x,
                        y: l.y > i.y ? l.y : i.y,
                        h: l.h < i.h ? l.h : i.h,
                        w: l.w < i.w ? l.w : i.w
                    }
                }, e.clipElement = function (t) {
                    var o = e.getClippingRect(t);
                    o.w < 0 && (o.w = 0), o.h < 0 && (o.h = 0), t.style.clip = "rect(" + o.y + "px," + o.w + "px," + o.h + "px," + o.x + "px)"
                }, e.scrollOffset = function (t) {
                    for (var o = 0, r = 0, n = document.scrollingElement || {
                        scrollLeft: 0,
                        scrollTop: 0
                    }; t.parentNode && "CANVAS-DATAGRID" !== t.nodeName && t !== e.intf;) "canvas-datagrid-tree" !== t.nodeType && "canvas-datagrid-cell" !== t.nodeType && (o -= t.scrollLeft, r -= t.scrollTop), t = t.parentNode;
                    return {left: o - n.scrollLeft, top: r - n.scrollTop}
                }, e.resizeEditInput = function () {
                    if (e.input && e.input.editCell) {
                        var t = e.canvas.getBoundingClientRect(), o = e.scrollOffset(e.intf),
                            r = "collapse" === e.style.gridBorderCollapse ? 1 : 2, n = e.style.cellBorderWidth * r,
                            l = e.getVisibleCellByIndex(e.input.editCell.columnIndex, e.input.editCell.rowIndex) || {
                                x: -100,
                                y: -100,
                                height: 0,
                                width: 0
                            };
                        if (e.mobile) return e.input.style.left = "0", e.input.style.top = e.height - e.style.mobileEditInputHeight - n - 1 + "px", e.input.style.height = e.style.mobileEditInputHeight + "px", void(e.input.style.width = e.width - n - 1 + "px");
                        e.input.style.left = t.left + l.x + e.canvasOffsetLeft - o.left + "px", e.input.style.top = t.top + l.y - e.style.cellBorderWidth + e.canvasOffsetTop - o.top + "px", e.input.style.height = l.height - n + "px", e.input.style.width = l.width - e.style.cellPaddingLeft + "px", e.clipElement(e.input)
                    }
                }, e.position = function (t, o) {
                    for (var r, n, l = 0, i = 0, a = t; t.offsetParent && "CANVAS-DATAGRID" !== t.nodeName;) l += t.offsetLeft, i += t.offsetTop, r = t.offsetHeight, n = t.offsetWidth, t = t.offsetParent;
                    return o ? {
                        left: l,
                        top: i,
                        height: r,
                        width: n
                    } : (t = a, a = e.scrollOffset(t), {left: l + a.left, top: i + a.top, height: r, width: n})
                }, e.getLayerPos = function (t) {
                    var o = e.canvas.getBoundingClientRect(), r = {x: t.clientX - o.left, y: t.clientY - o.top};
                    return e.isChildGrid && (r.x -= e.canvasOffsetLeft, r.y -= e.canvasOffsetTop), {
                        x: r.x,
                        y: r.y,
                        rect: o
                    }
                }, e.endEdit = function (t) {
                    function o() {
                        t = !0
                    }

                    var r = e.input.editCell, n = r.rowIndex;
                    if (e.dispatchEvent("beforeendedit", {
                        cell: r,
                        newValue: e.input.value,
                        oldValue: r.value,
                        abort: o,
                        input: e.input
                    })) return !1;
                    if (e.input.value !== r.value && !t) {
                        if (e.changes[n] = e.changes[n] || {}, e.changes[n][r.header.name] = e.input.value, r.data || (e.data[r.rowIndex] = {}, r.data = e.data[r.rowIndex]), r.data[r.header.name] = e.input.value, n === e.data.length) {
                            if (e.dispatchEvent("newrow", {
                                value: e.input.value,
                                defaultValue: r.value,
                                aborted: t,
                                cell: r,
                                input: e.input
                            })) return !1;
                            e.addRow(r.data), e.createNewRowData()
                        }
                        e.draw(!0)
                    }
                    return e.input.parentNode && e.input.parentNode.removeChild(e.input), e.intf.focus(), e.dispatchEvent("endedit", {
                        cell: r,
                        value: e.input.value,
                        aborted: t,
                        input: e.input
                    }), e.input = void 0, !0
                }, e.beginEditAt = function (t, o, r) {
                    if (e.attributes.editable) {
                        e.input && e.endEdit();
                        var n, l, i, a, s, c = e.getVisibleCellByIndex(t, o);
                        e.getSchema();
                        if (c && c.header) {
                            if (i = c.header.enum, e.dispatchEvent("beforebeginedit", {
                                cell: c,
                                NativeEvent: r
                            })) return !1;
                            e.scrollIntoView(t, o), e.setActiveCell(t, o), n = e.getAdjacentCells(), e.input = i ? document.createElement("select") : document.createElement(e.attributes.multiLine ? "textarea" : "input"), c = e.getVisibleCellByIndex(t, o), c && (i && ("function" == typeof i ? l = i.apply(e.intf, [{cell: c}]) : Array.isArray(i) && (l = i), l.forEach(function (t) {
                                var o, r, n = document.createElement("option");
                                Array.isArray(t) ? (o = t[0], r = t[1]) : (o = t, r = t), o === c.value && (s = !0), n.value = o, n.innerHTML = r, e.input.appendChild(n)
                            }), s || (a = document.createElement("option"), a.value = c.value, a.innerHTML = c.value, e.input.appendChild(a)), e.input.addEventListener("change", function () {
                                e.endEdit(), e.draw(!0)
                            })), e.dispatchEvent("appendeditinput", {
                                cell: c,
                                input: e.input
                            }) || document.body.appendChild(e.input), e.createInlineStyle(e.input, e.mobile ? "canvas-datagrid-edit-mobile-input" : "canvas-datagrid-edit-input"), e.input.style.position = "absolute", e.input.editCell = c, e.resizeEditInput(), e.input.style.zIndex = e.style.editCellZIndex, e.input.style.fontSize = parseInt(e.style.editCellFontSize, 10) * e.scale + "px", e.input.value = -1 !== [null, void 0].indexOf(c.value) ? "" : c.value, e.input.focus(), e.input.addEventListener("click", e.stopPropagation), e.input.addEventListener("dblclick", e.stopPropagation), e.input.addEventListener("mouseup", e.stopPropagation), e.input.addEventListener("mousedown", e.stopPropagation), e.input.addEventListener("keydown", function (o) {
                                var r = c.columnIndex, l = c.rowIndex;
                                if (27 === o.keyCode) e.endEdit(!0), e.draw(!0); else if (13 === o.keyCode && (!e.attributes.multiLine || e.attributes.multiLine && o.shiftKey)) e.endEdit(), e.draw(!0); else if (9 === o.keyCode) {
                                    if (o.preventDefault(), !e.endEdit()) return;
                                    r = o.shiftKey ? n.left : n.right, n.left === t && o.shiftKey && (r = n.last, l -= 1), n.right !== t || o.shiftKey || (r = n.first, l += 1), l < 0 && (l = e.data.length - 1), l > e.data.length - 1 && (l = 0), e.scrollIntoView(r, l), e.beginEditAt(r, l, o)
                                }
                            }), e.dispatchEvent("beginedit", {cell: c, input: e.input}))
                        }
                    }
                }, e.createInlineStyle = function (t, o) {
                    var r = {
                        "canvas-datagrid-context-menu-filter-input": {
                            height: "19px",
                            verticalAlign: "bottom",
                            marginLeft: "2px",
                            padding: "0",
                            background: e.style.contextFilterInputBackground,
                            color: e.style.contextFilterInputColor,
                            border: e.style.contextFilterInputBorder,
                            borderRadius: e.style.contextFilterInputBorderRadius,
                            lineHeight: "normal",
                            fontWeight: "normal",
                            fontFamily: e.style.contextFilterInputFontFamily,
                            fontSize: e.style.contextFilterInputFontSize
                        },
                        "canvas-datagrid-context-menu-filter-input1": {
                            width: "60px",
                            height: "19px",
                            verticalAlign: "bottom",
                            marginLeft: "2px",
                            padding: "0",
                            background: e.style.contextFilterInputBackground,
                            color: e.style.contextFilterInputColor,
                            border: e.style.contextFilterInputBorder,
                            borderRadius: e.style.contextFilterInputBorderRadius,
                            lineHeight: "normal",
                            fontWeight: "normal",
                            fontFamily: e.style.contextFilterInputFontFamily,
                            fontSize: e.style.contextFilterInputFontSize
                        },
                        "canvas-datagrid-context-menu-filter-button": {
                            height: "19px",
                            verticalAlign: "bottom",
                            marginLeft: "2px",
                            padding: "0",
                            background: e.style.contextMenuBackground,
                            color: e.style.contextMenuColor,
                            border: e.style.contextFilterButtonBorder,
                            borderRadius: e.style.contextFilterButtonBorderRadius,
                            lineHeight: "normal",
                            fontWeight: "normal",
                            fontFamily: e.style.contextMenuFilterButtonFontFamily,
                            fontSize: e.style.contextMenuFilterButtonFontSize
                        },
                        "canvas-datagrid-context-child-arrow": {
                            cssFloat: "right",
                            color: e.style.childContextMenuArrowColor,
                            fontSize: e.style.contextMenuChildArrowFontSize,
                            fontFamily: e.style.contextMenuFontFamily,
                            verticalAlign: "middle"
                        },
                        "canvas-datagrid-autocomplete": {
                            fontFamily: e.style.contextMenuFontFamily,
                            fontSize: e.style.contextMenuFontSize,
                            background: e.style.contextMenuBackground,
                            color: e.style.contextMenuColor,
                            border: e.style.contextMenuBorder,
                            padding: e.style.contextMenuPadding,
                            borderRadius: e.style.contextMenuBorderRadius,
                            opacity: e.style.contextMenuOpacity,
                            position: "absolute",
                            zIndex: 9999,
                            overflow: "hidden"
                        },
                        "canvas-datagrid-autocomplete-item": {
                            background: e.style.contextMenuBackground,
                            color: e.style.contextMenuColor
                        },
                        "canvas-datagrid-autocomplete-item:hover": {
                            background: e.style.contextMenuHoverBackground,
                            color: e.style.contextMenuHoverColor
                        },
                        "canvas-datagrid-canvas": {position: "absolute", zIndex: "-1"},
                        "canvas-datagrid": {display: "block"},
                        "canvas-datagrid-control-input": {
                            position: "fixed",
                            top: "-5px",
                            left: "-5px",
                            border: "none",
                            opacity: "0",
                            cursor: "pointer",
                            width: "1px",
                            height: "1px",
                            lineHeight: "normal",
                            fontWeight: "normal",
                            fontFamily: e.style.contextMenuFontFamily,
                            fontSize: e.style.contextMenuFontSize
                        },
                        "canvas-datagrid-edit-mobile-input": {
                            boxSizing: "content-box",
                            outline: "none",
                            margin: "0",
                            padding: "0 0 0 0",
                            lineHeight: "normal",
                            fontWeight: "normal",
                            fontFamily: e.style.mobileEditFontFamily,
                            fontSize: e.style.mobileEditFontSize,
                            border: e.style.editCellBorder,
                            color: e.style.editCellColor,
                            background: e.style.editCellBackgroundColor,
                            appearance: "none",
                            webkitAppearance: "none",
                            mozAppearance: "none",
                            borderRadius: "0"
                        },
                        "canvas-datagrid-edit-input": {
                            boxSizing: "content-box",
                            outline: "none",
                            margin: "0",
                            padding: "0 0 0 " + e.style.editCellPaddingLeft + "px",
                            lineHeight: "normal",
                            fontWeight: "normal",
                            fontFamily: e.style.editCellFontFamily,
                            fontSize: e.style.editCellFontSize,
                            boxShadow: e.style.editCellBoxShadow,
                            border: e.style.editCellBorder,
                            color: e.style.editCellColor,
                            background: e.style.editCellBackgroundColor,
                            appearance: "none",
                            webkitAppearance: "none",
                            mozAppearance: "none",
                            borderRadius: "0"
                        },
                        "canvas-datagrid-context-menu-item-mobile": {
                            lineHeight: "normal",
                            fontWeight: "normal",
                            fontFamily: e.style.contextMenuFontFamily,
                            fontSize: e.style.contextMenuFontSize,
                            color: "inherit",
                            background: "inherit",
                            margin: e.style.contextMenuItemMargin,
                            borderRadius: e.style.contextMenuItemBorderRadius,
                            verticalAlign: "middle"
                        },
                        "canvas-datagrid-context-menu-item": {
                            lineHeight: "normal",
                            fontWeight: "normal",
                            fontFamily: e.style.contextMenuFontFamily,
                            fontSize: e.style.contextMenuFontSize,
                            color: "inherit",
                            background: "inherit",
                            margin: e.style.contextMenuItemMargin,
                            borderRadius: e.style.contextMenuItemBorderRadius,
                            verticalAlign: "middle"
                        },
                        "canvas-datagrid-context-menu-item:hover": {
                            background: e.style.contextMenuHoverBackground,
                            color: e.style.contextMenuHoverColor
                        },
                        "canvas-datagrid-context-menu-label": {
                            margin: e.style.contextMenuLabelMargin,
                            display: e.style.contextMenuLabelDisplay,
                            minWidth: e.style.contextMenuLabelMinWidth,
                            maxWidth: e.style.contextMenuLabelMaxWidth
                        },
                        "canvas-datagrid-context-menu-mobile": {
                            lineHeight: "normal",
                            fontWeight: "normal",
                            fontFamily: e.style.contextMenuFontFamily,
                            fontSize: e.style.contextMenuFontSize,
                            background: e.style.contextMenuBackground,
                            color: e.style.contextMenuColor,
                            border: e.style.contextMenuBorder,
                            padding: e.style.contextMenuPadding,
                            borderRadius: e.style.contextMenuBorderRadius,
                            opacity: e.style.contextMenuOpacity,
                            overflow: "hidden",
                            whiteSpace: "nowrap"
                        },
                        "canvas-datagrid-context-menu": {
                            lineHeight: "normal",
                            fontWeight: "normal",
                            fontFamily: e.style.contextMenuFontFamily,
                            fontSize: e.style.contextMenuFontSize,
                            background: e.style.contextMenuBackground,
                            color: e.style.contextMenuColor,
                            border: e.style.contextMenuBorder,
                            padding: e.style.contextMenuPadding,
                            borderRadius: e.style.contextMenuBorderRadius,
                            opacity: e.style.contextMenuOpacity,
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            cursor: e.style.contextMenuCursor
                        },
                        "canvas-datagrid-invalid-search-regExp": {background: e.style.contextMenuFilterInvalidExpresion}
                    };
                    r[o] && Object.keys(r[o]).map(function (e) {
                        t.style[e] = r[o][e]
                    })
                }, e.appendTo = function (t) {
                    e.parentNode = t, e.setDom()
                }, e.setDom = function () {
                    e.isChildGrid ? (e.parentGrid = e.parentNode.parentGrid, e.ctx = e.parentGrid.context, e.canvas = e.parentGrid.canvas, e.controlInput = e.parentGrid.controlInput, e.eventParent = e.canvas) : (e.controlInput = e.controlInput || document.createElement("input"), e.controlInput.onblur = e.intf.blur, e.createInlineStyle(e.controlInput, "canvas-datagrid-control-input"), e.isChildGrid = !1, e.parentDOMNode = e.parentNode, e.parentIsCanvas = /^canvas$/i.test(e.parentDOMNode.tagName), e.parentIsCanvas ? e.canvas = e.parentDOMNode : (e.canvas = document.createElement("canvas"), e.intf.createShadowRoot && e.parentDOMNode.appendChild(e.canvas)), document.body.appendChild(e.controlInput), e.createInlineStyle(e.canvas, "canvas-datagrid"), e.ctx = e.canvas.getContext("2d"), e.ctx.textBaseline = "alphabetic", e.eventParent = e.canvas), e.parentNodeStyle = e.canvas.style, e.controlInput.setAttribute("readonly", !0), e.controlInput.addEventListener("blur", function (t) {
                        t.target !== e.canvas && (e.hasFocus = !1)
                    }), e.eventParent.addEventListener("scroll", e.resize, !1), e.eventParent.addEventListener("touchstart", e.touchstart, !1), e.eventParent.addEventListener("mouseup", e.mouseup, !1), e.eventParent.addEventListener("mousedown", e.mousedown, !1), e.eventParent.addEventListener("dblclick", e.dblclick, !1), e.eventParent.addEventListener("click", e.click, !1), e.eventParent.addEventListener("mousemove", e.mousemove), e[e.isChildGrid ? "parentGrid" : "eventParent"].addEventListener("wheel", e.scrollWheel, !1), e.canvas.addEventListener("contextmenu", e.contextmenuEvent, !1), e.controlInput.addEventListener("copy", e.copy), e.controlInput.addEventListener("cut", e.cut), e.controlInput.addEventListener("paste", e.paste), e.controlInput.addEventListener("keypress", e.keypress, !1), e.controlInput.addEventListener("keyup", e.keyup, !1), e.controlInput.addEventListener("keydown", e.keydown, !1), window.addEventListener("resize", e.resize)
                }
            }
        }.apply(t, r)) && (e.exports = n)
    }, function (e, t, o) {
        var r, n;
        r = [], void 0 !== (n = function () {
            "use strict";
            return function (e) {
                e.integerToAlpha = function (e) {
                    for (var t = "a".charCodeAt(0), o = "z".charCodeAt(0), r = o - t + 1, n = ""; e >= 0;) n = String.fromCharCode(e % r + t) + n, e = Math.floor(e / r) - 1;
                    return n
                }, e.insertColumn = function (t, o) {
                    var r = e.getSchema();
                    if (r.length < o) throw new Error("Index is beyond the length of the schema.");
                    e.validateColumn(t, r), r.splice(o, 0, t), e.data.forEach(function (o) {
                        e.applyDefaultValue(o, t)
                    }), e.intf.schema = r
                }, e.deleteColumn = function (t) {
                    var o = e.getSchema();
                    e.data.forEach(function (e) {
                        delete e[o[t].name]
                    }), o.splice(t, 1), e.intf.schema = o
                }, e.addColumn = function (t) {
                    var o = e.getSchema();
                    e.validateColumn(t, o), o.push(t), e.data.forEach(function (o) {
                        e.applyDefaultValue(o, t)
                    }), e.intf.schema = o
                }, e.deleteRow = function (t) {
                    e.originalData.splice(t, 1), e.setFilter(), e.resize(!0)
                }, e.insertRow = function (t, o) {
                    if (e.originalData.length < o) throw new Error("Index is beyond the length of the dataset.");
                    e.originalData.splice(o, 0, t), e.getSchema().forEach(function (r) {
                        void 0 === t[r.name] && e.applyDefaultValue(e.originalData[o], r)
                    }), e.setFilter(), e.resize(!0)
                }, e.addRow = function (t) {
                    e.originalData.push(t), e.getSchema().forEach(function (o) {
                        void 0 === t[o.name] && e.applyDefaultValue(e.originalData[e.originalData.length - 1], o)
                    }), e.setFilter(), e.resize(!0)
                }, e.setRowHeight = function (t, o) {
                    e.sizes.rows[t] = o, e.draw(!0)
                }, e.setColumnWidth = function (t, o) {
                    e.sizes.columns[t] = o, e.draw(!0)
                }, e.resetColumnWidths = function () {
                    e.sizes.columns = {}, e.draw(!0)
                }, e.resetRowHeights = function () {
                    e.sizes.rows = {}, e.draw(!0)
                }, e.setFilter = function (t, o) {
                    function r() {
                        e.refreshFromOrigialData(), Object.keys(e.columnFilters).forEach(function (o) {
                            var r = e.getHeaderByName(t);
                            r && (e.currentFilter = r.filter || e.filter(t.type || "string"), e.data = e.data.filter(function (t1) {
                                if (!isNaN(start) || !isNaN(end)) {
                                    if (typeof t1[t] === "string")
                                        var m = t1[t].replace(",", "");
                                    else
                                        var m = 0;
                                    if (!isNaN(start) && isNaN(end)) {
                                        console.log("测试1");
                                        if (parseFloat(m) >= start)
                                            return true;
                                    } else if (isNaN(start) && !isNaN(end)) {
                                        console.log("测试2");
                                        if (parseFloat(m) <= end)
                                            return true;
                                    } else if (!isNaN(start) && !isNaN(end)) {
                                        console.log("测试3");
                                        if (parseFloat(m) >= start && parseFloat(m) <= end)
                                            return true;
                                    }
                                    return false;
                                } else {
                                    console.log("测试4" + e.columnFilters[o]);
                                    if (e.columnFilters[o] == "t")
                                        return e.currentFilter(t1[o], "")
                                    return e.currentFilter(t1[o], e.columnFilters[o])
                                }

                            }))
                        }), e.resize(), e.draw(!0)
                    }

                    if (void 0 === t && void 0 === o) return e.columnFilters = {}, r();
                    if (o.indexOf("t") > -1) {
                        var pos = o.indexOf("t"), start = parseFloat(o.substring(0, pos)),
                            end = parseFloat(o.substring(pos + 1, o.length));
                        console.log("pos: " + o);
                        console.log("start: " + start);
                        console.log("end: " + end);
                        !t || start !== 0 || end !== 0 ? e.columnFilters[t] = o : delete e.columnFilters[t], r()
                    } else {
                        !t || "" !== o && void 0 !== o ? e.columnFilters[t] = o : delete e.columnFilters[t], r()
                    }


                }, e.findRowScrollTop = function (t) {
                    if (void 0 === e.scrollCache.y[t]) throw new RangeError("Row index out of range.");
                    return e.scrollCache.y[t]
                }, e.findColumnScrollLeft = function (t) {
                    var o = Math.max(t - 1, 0);
                    if (void 0 === e.scrollCache.x[o]) throw new Error("Column index out of range.");
                    return e.scrollCache.x[o] - e.getColummnWidth(e.orders.columns[t])
                }, e.gotoCell = function (t, o, r, n) {
                    var l, i = void 0 === t ? void 0 : e.findColumnScrollLeft(t),
                        a = void 0 === o ? void 0 : e.findRowScrollTop(o),
                        s = e.scrollBox.width - (e.scrollBox.verticalBarVisible ? e.style.scrollBarWidth : 0),
                        c = e.scrollBox.height - (e.scrollBox.horizontalBarVisible ? e.style.scrollBarWidth : 0);
                    r = void 0 === r ? 0 : r, n = void 0 === n ? 0 : n, i -= s * r, a -= c * n, void 0 !== t && void 0 !== o ? (e.scrollBox.scrollTo(i, a), requestAnimationFrame(function () {
                        (l = e.getVisibleCellByIndex(t, o)) && (i += l.width * r, a += l.height * n, e.scrollBox.scrollTo(i, a))
                    })) : void 0 !== t ? e.scrollBox.scrollLeft = i : void 0 !== o && (e.scrollBox.scrollTop = a)
                }, e.gotoRow = function (t) {
                    e.gotoCell(0, t)
                }, e.scrollIntoView = function (t, o, r, n) {
                    0 === e.visibleCells.filter(function (r) {
                        return (r.rowIndex === o || void 0 === o) && (r.columnIndex === t || void 0 === t) && r.x > 0 && r.y > 0 && r.x + r.width < e.width && r.y + r.height < e.height
                    }).length && e.gotoCell(t, o, r, n)
                }, e.setActiveCell = function (t, o) {
                    t < 0 && (t = 0), o < 0 && (o = 0), e.activeCell = {rowIndex: o, columnIndex: t}
                }, e.selectNone = function (t) {
                    e.selections = [], e.dispatchEvent("selectionchanged", {
                        selectedData: e.getSelectedData(),
                        selections: e.selections,
                        selectionBounds: e.selectionBounds
                    }), t || e.draw()
                }, e.selectAll = function (t) {
                    e.selectArea({
                        top: 0,
                        left: -1,
                        right: e.getSchema().length - 1,
                        bottom: e.data.length - 1
                    }), t || e.draw()
                }, e.isColumnSelected = function (t) {
                    var o = !0;
                    return e.data.forEach(function (r, n) {
                        e.selections[n] && -1 !== e.selections[n].indexOf(e.orders.columns[t]) || (o = !1)
                    }), o
                }, e.forEachSelectedCell = function (t, o) {
                    var r = [], n = o ? e.getSchema() : e.getVisibleSchema(), l = e.data.length;
                    e.selections.forEach(function (o, i) {
                        if (i !== l) {
                            if (0 === o.length) return void(r[i] = null);
                            r[i] = {}, o.forEach(function (o) {
                                -1 !== o && n[o] && t(e.data, i, n[o].name)
                            })
                        }
                    })
                }, e.selectColumn = function (t, o, r, n) {
                    function l(t) {
                        e.data.forEach(function (o, r) {
                            e.selections[r] = e.selections[r] || [], -1 === e.selections[r].indexOf(t) && e.selections[r].push(t)
                        })
                    }

                    var i, a, s;
                    if (r) {
                        if (!e.activeCell) return;
                        for (i = Math.min(e.activeCell.columnIndex, t), a = Math.max(e.activeCell.columnIndex, t), s = i; a > s; s += 1) l(s)
                    }
                    o || r || (e.selections = [], e.activeCell.columnIndex = t, e.activeCell.rowIndex = e.scrollIndexTop), o && e.isColumnSelected(t) ? function (t) {
                        e.data.forEach(function (o, r) {
                            e.selections[r] = e.selections[r] || [], -1 !== e.selections[r].indexOf(t) && e.selections[r].splice(e.selections[r].indexOf(t), 1)
                        })
                    }(t) : l(t), n || e.dispatchEvent("selectionchanged", {
                        selectedData: e.getSelectedData(),
                        selections: e.selections,
                        selectionBounds: e.getSelectionBounds()
                    })
                }, e.selectRow = function (t, o, r, n) {
                    function l() {
                        n || e.dispatchEvent("selectionchanged", {
                            selectedData: e.getSelectedData(),
                            selections: e.selections,
                            selectionBounds: e.selectionBounds
                        })
                    }

                    function i(t) {
                        e.selections[t] = [], e.selections[t].push(-1), d.forEach(function (o, r) {
                            e.selections[t].push(e.orders.columns.indexOf(o.index))
                        })
                    }

                    var a, s, c, d = e.getVisibleSchema();
                    if ((!1 === e.dragAddToSelection || void 0 === e.dragObject) && e.selections[t] && e.selections[t].length - 1 === d.length && o) return e.selections[t] = [], void l();
                    if (!0 === e.dragAddToSelection || void 0 === e.dragObject) if (r && void 0 === e.dragObject) {
                        if (!e.activeCell) return;
                        for (s = Math.min(e.activeCell.rowIndex, t), c = Math.max(e.activeCell.rowIndex, t), a = s; c >= a; a += 1) i(a)
                    } else i(t);
                    l()
                }, e.collapseTree = function (t) {
                    e.dispatchEvent("collapsetree", {
                        childGrid: e.childGrids[t],
                        data: e.data[t],
                        rowIndex: t
                    }), e.openChildren[t].blur(), e.openChildren[t].dispose(), delete e.openChildren[t], delete e.sizes.trees[t], delete e.childGrids[t], e.dispatchEvent("resizerow", {cellHeight: e.style.cellHeight}), e.resize(!0), e.draw(!0)
                }, e.expandTree = function (t) {
                    var o, r = e.args.treeGridAttributes || {}, n = e.getColumnHeaderCellHeight(),
                        l = e.sizes.columns.cornerCell || e.style.rowHeaderCellWidth,
                        i = e.sizes.trees[t] || e.style.treeGridHeight;
                    e.childGrids[t] || (r.debug = e.attributes.debug, r.name = e.attributes.saveAppearance ? e.attributes.name + "tree" + t : void 0, r.style = r.style || e.style, r.parentNode = {
                        parentGrid: e.intf,
                        nodeType: "canvas-datagrid-tree",
                        offsetHeight: i,
                        offsetWidth: e.width - l,
                        header: {width: e.width - l},
                        offsetLeft: l,
                        offsetTop: n,
                        offsetParent: e.intf.parentNode,
                        parentNode: e.intf.parentNode,
                        style: "tree",
                        data: e.data[t]
                    }, o = e.createGrid(r), e.childGrids[t] = o), o = e.childGrids[t], o.visible = !0, e.dispatchEvent("expandtree", {
                        treeGrid: o,
                        data: e.data[t],
                        rowIndex: t
                    }), e.openChildren[t] = o, e.sizes.trees[t] = i, e.dispatchEvent("resizerow", {height: e.style.cellHeight}), e.resize(!0)
                }, e.toggleTree = function (t) {
                    if (e.openChildren[t]) return e.collapseTree(t);
                    e.expandTree(t)
                }, e.getHeaderByName = function (t) {
                    var o, r = e.getSchema();
                    for (o = 0; o < r.length; o += 1) if (r[o].name === t) return r[o]
                }, e.fitColumnToValues = function (t, o) {
                    e.canvas && (e.sizes.columns["cornerCell" === t ? -1 : e.getHeaderByName(t).index] = Math.max(e.findColumnMaxTextLength(t), e.style.minColumnWidth), o || (e.resize(), e.draw(!0)))
                }, e.isCellVisible = function (t, o) {
                    if (void 0 !== o) return e.visibleCells.filter(function (e) {
                        return e.columnIndex === t && e.rowIndex === o
                    }).length > 0;
                    var r, n = e.visibleCells.length;
                    for (r = 0; r < n; r += 1) if (t.x === e.visibleCells[r].x && t.y === e.visibleCells[r].y) return !0;
                    return !1
                }, e.order = function (t, o, r, n) {
                    var l, i = e.getSchema().filter(function (e) {
                        return e.name === t
                    });
                    if (!e.dispatchEvent("beforesortcolumn", {
                        name: t,
                        direction: o
                    }) && (e.orderBy = t, e.data && 0 !== e.data.length)) {
                        if (0 === i.length) throw new Error("Cannot sort.  No such column name");
                        l = r || e.sorters[i[0].type], l || void 0 === i[0].type || console.warn('Cannot sort type "%s" falling back to string sort.', i[0].type), e.data = e.data.sort("function" == typeof l ? l(t, o) : e.sorters.string), e.dispatchEvent("sortcolumn", {
                            name: t,
                            direction: o
                        }), e.draw(!0), n || e.setStorageData()
                    }
                }, e.isInGrid = function (t) {
                    return !(t.x < 0 || t.x > e.width || t.y < 0 || t.y > e.height)
                }, e.moveSelection = function (t, o) {
                    var r = [];
                    e.selections.forEach(function (e, n) {
                        r[n + o] = [], e.forEach(function (e) {
                            r[n + o].push(e + t)
                        })
                    }), e.selections = r
                }, e.moveTo = function (t, o, r) {
                    var n, l = e.getSelectedData(), i = e.getVisibleSchema(), a = t.length, s = -1 / 0, c = 1 / 0,
                        d = r - 1;
                    t.forEach(function (t, r) {
                        r !== a && 0 !== t.length && (c = Math.min(e.getVisibleColumnIndexOf(o), c), s = Math.max(s, t.length), t.forEach(function (t) {
                            t = e.getVisibleColumnIndexOf(t), i[t] && (e.data[r] || (e.data[r] = {}), e.data[r][i[t].name] = null)
                        }))
                    }), t.forEach(function (t, r) {
                        var a;
                        d += 1, n = e.getVisibleColumnIndexOf(o), t.forEach(function (t, o) {
                            t = e.getVisibleColumnIndexOf(t), o > 0 && (n += t - a), a = t, -1 === t || !i[n] || !i[t] || e.data.length - 1 < d || d < 0 || (e.data[d] || (e.data[d] = {}), e.data[d][i[n].name] = l[r][i[t].name])
                        })
                    })
                }, e.isColumnVisible = function (t) {
                    return !e.getSchema()[t].hidden;
                }, e.isRowVisible = function (t) {
                    return e.visibleCells.filter(function (e) {
                        return e.rowIndex === t
                    }).length > 0
                }, e.getVisibleCellByIndex = function (t, o) {
                    return e.visibleCells.filter(function (e) {
                        return e.columnIndex === t && e.rowIndex === o
                    })[0]
                }, e.getCellAt = function (t, o, r) {
                    if (e.visibleCells) {
                        var n, l, i, a, s, c = r ? e.attributes.touchScrollZone : 0,
                            d = "move" === e.attributes.borderDragBehavior, u = e.visibleCells.length,
                            h = d ? e.cursorGrab : "ew-resize", f = d ? e.cursorGrab : "ns-resize";
                        if (e.visibleCells && e.visibleCells.length) {
                            if (e.hasFocus = !0, !(o < e.height && o > 0 && t < e.width && t > 0)) return e.hasFocus = !1, {
                                dragContext: "inherit",
                                context: "inherit"
                            };
                            for (l = 0; l < u; l += 1) if (a = e.visibleCells[l], s = {
                                x: a.x,
                                y: a.y,
                                height: a.height,
                                width: a.width
                            }, r && /(vertical|horizontal)-scroll-/.test(a.style) && (s.x -= c, s.y -= c, s.height += c, s.width += c), s.x - e.style.cellBorderWidth < t && s.x + s.width + e.style.cellBorderWidth > t && s.y - e.style.cellBorderWidth < o && s.y + s.height + e.style.cellBorderWidth > o) {
                                if (/frozen-row-marker/.test(a.style)) return a.dragContext = a.style, a.context = "row-resize", a;
                                if (/frozen-column-marker/.test(a.style)) return a.dragContext = a.style, a.context = "col-resize", a;
                                if (/selection-handle-/.test(a.style)) return a.dragContext = a.style, a.context = "crosshair", a;
                                if (/vertical-scroll-(bar|box)/.test(a.style)) return a.dragContext = "vertical-scroll-box", a.context = "vertical-scroll-box", a.isScrollBar = !0, a.isVerticalScrollBar = !0, o > e.scrollBox.box.v.y + e.scrollBox.scrollBoxHeight ? (a.dragContext = "vertical-scroll-bottom", a.context = "vertical-scroll-bottom") : o < e.scrollBox.box.v.y && (a.dragContext = "vertical-scroll-top", a.context = "vertical-scroll-top"), e.cursor = "default", a;
                                if (/horizontal-scroll-(bar|box)/.test(a.style)) return a.dragContext = "horizontal-scroll-box", a.context = "horizontal-scroll-box", a.isScrollBar = !0, a.isHorizontalScrollBar = !0, t > e.scrollBox.box.h.x + e.scrollBox.scrollBoxWidth ? (a.dragContext = "horizontal-scroll-right", a.context = "horizontal-scroll-right") : t < e.scrollBox.box.h.x && (a.dragContext = "horizontal-scroll-left", a.context = "horizontal-scroll-left"), e.cursor = "default", a;
                                if (n = function (r) {
                                    return r.x + r.width - .4 * e.attributes.borderResizeZone < t && r.x + r.width + .6 * e.attributes.borderResizeZone > t ? "r" : r.x - .4 * e.attributes.borderResizeZone < t && r.x + .6 * e.attributes.borderResizeZone > t ? "l" : r.y + r.height - .4 * e.attributes.borderResizeZone < o && r.y + r.height + .6 * e.attributes.borderResizeZone > o ? "b" : r.y - .4 * e.attributes.borderResizeZone < o && r.y + .6 * e.attributes.borderResizeZone > o ? "t" : void 0
                                }(s), i = d && a.selectionBorder && -1 !== a.selectionBorder.indexOf(n), -1 !== ["l", "r"].indexOf(n) && (e.attributes.allowColumnResize || i) && (e.attributes.allowColumnResizeFromCell && a.isNormal || !a.isNormal || i) && (e.attributes.allowRowHeaderResize && (a.isRowHeader || a.isCorner) || !a.isRowHeader || !a.isCorner)) {
                                    if ((a.isColumnHeader || a.isCorner || e.attributes.allowColumnResizeFromCell && a.isNormal) && "r" === n) return a.context = "ew-resize", a.dragContext = "ew-resize", a;
                                    if (!a.isColumnHeader && !a.isCorner && i) return a.context = h, a.dragContext = n + "-move", a
                                }
                                if (-1 !== ["t", "b"].indexOf(n) && a.rowIndex > -1 && (e.attributes.allowRowResize || i) && (e.attributes.allowRowResizeFromCell && a.isNormal || !a.isNormal || i) && !a.isColumnHeader) {
                                    if ((a.isRowHeader || a.isCorner || e.attributes.allowRowResizeFromCell && a.isNormal) && "b" === n) return a.context = "ns-resize", a.dragContext = "ns-resize", a;
                                    if (!a.isRowHeader && !a.isCorner && i) return a.context = f, a.dragContext = n + "-move", a
                                }
                                return "columnHeaderCell" === a.style ? (a.context = "cell", a.dragContext = "column-reorder", a) : "rowHeaderCell" === a.style ? (e.attributes.rowGrabZoneSize + (a.y - e.style.cellBorderWidth) < o || !e.attributes.allowRowReordering ? (a.dragContext = "cell", a.context = "cell") : (a.context = e.cursorGrab, a.dragContext = "row-reorder"), a) : a.isGrid ? (e.hasFocus = !1, a.dragContext = "cell-grid", a.context = "cell-grid", a) : "tree-grid" === a.style ? (e.hasFocus = !1, a.dragContext = "tree", a.context = "tree", a) : (a.dragContext = "cell", a.context = "cell", a)
                            }
                            return e.hasFocus = !0, e.cursor = "default", {
                                dragContext: "background",
                                context: "background",
                                style: "background",
                                isBackground: !0
                            }
                        }
                    }
                }, e.getSelectionBounds = function () {
                    var t = {x: 1 / 0, y: 1 / 0}, o = {x: -1 / 0, y: -1 / 0};
                    return e.selections.forEach(function (e, r) {
                        var n, l;
                        t.y = r < t.y ? r : t.y, o.y = r > o.y ? r : o.y, n = Math.max.apply(null, e), l = Math.min.apply(null, e), t.x = l < t.x ? l : t.x, o.x = n > o.x ? n : o.x
                    }), {top: t.y, left: t.x, bottom: o.y, right: o.x}
                }, e.getSchemaFromData = function (t) {
                    return t = t || e.data, Object.keys(t[0] || {" ": ""}).map(function (o, r) {
                        var n = e.getBestGuessDataType(o, t),
                            l = {name: o, title: t[0][parseInt(o, 10)], index: r, type: n, filter: e.filter(n)};
                        return e.storedSettings && e.storedSettings.visibility && void 0 !== e.storedSettings.visibility[l.name] && (l.hidden = !e.storedSettings.visibility[l.name]), l
                    })
                }, e.clearChangeLog = function () {
                    e.changes = []
                }, e.selectArea = function (t, o) {
                    e.selectionBounds = t || e.selectionBounds;
                    var r, n, l, i = e.getSchema();
                    if (o || (e.selections = []), e.selectionBounds.top < -1 || e.selectionBounds.bottom > e.data.length || e.selectionBounds.left < -1 || e.selectionBounds.right > i.length) throw new Error("Impossible selection area");
                    for (n = e.selectionBounds.top; n <= e.selectionBounds.bottom; n += 1) for (e.selections[n] = [], l = e.selectionBounds.left; l <= e.selectionBounds.right; l += 1) -1 === e.selections[n].indexOf(l) && e.selections[n].push(l);
                    r = {
                        selections: e.selections,
                        selectionBounds: e.selectionBounds
                    }, Object.defineProperty(r, "selectedData", {
                        get: function () {
                            return e.getSelectedData()
                        }
                    }), e.dispatchEvent("selectionchanged", r)
                }, e.findColumnMaxTextLength = function (t) {
                    var o = -1 / 0;
                    return "cornerCell" === t ? (e.ctx.font = e.style.rowHeaderCellFont, e.ctx.measureText((e.data.length + (e.attributes.showNewRow ? 1 : 0)).toString()).width + e.style.autosizePadding + e.style.autosizeHeaderCellPadding + e.style.rowHeaderCellPaddingRight + e.style.rowHeaderCellPaddingLeft + (e.attributes.tree ? e.style.treeArrowWidth + e.style.treeArrowMarginLeft + e.style.treeArrowMarginRight : 0)) : (e.getSchema().forEach(function (r) {
                        if (r.name === t) {
                            e.ctx.font = e.style.columnHeaderCellFont;
                            var n = e.ctx.measureText(r.title || r.name).width + e.style.headerCellPaddingRight + e.style.headerCellPaddingLeft;
                            o = n > o ? n : o
                        }
                    }), e.data.forEach(function (r) {
                        e.ctx.font = e.style.cellFont;
                        var n = e.ctx.measureText(r[t]).width + e.style.cellPaddingRight + e.style.cellPaddingLeft + e.style.cellAutoResizePadding;
                        o = n > o ? n : o
                    }), o)
                }, e.getHeaderWidth = function () {
                    return e.getVisibleSchema().reduce(function (t, o) {
                        return t + (o.width || e.style.cellWidth)
                    }, 0)
                }, e.getRowHeight = function (t) {
                    return (e.sizes.rows[t] || e.style.cellHeight) * e.scale
                }, e.getColummnWidth = function (t) {
                    return (e.sizes.columns[t] || e.getSchema()[t].width || e.style.cellWidth) * e.scale
                }, e.formatters.string = function (e) {
                    return void 0 !== e.cell.value ? e.cell.value : ""
                }, e.formatters.rowHeaderCell = e.formatters.string, e.formatters.headerCell = e.formatters.string, e.formatters.number = e.formatters.string, e.formatters.int = e.formatters.string, e.formatters.html = e.formatters.string, e.sorters.string = function (e, t) {
                    var o = "asc" === t;
                    return function (t, r) {
                        return void 0 === t[e] || null === t[e] ? 1 : void 0 === r[e] || null === r[e] ? 0 : o ? t[e].localeCompare ? t[e].localeCompare(r[e]) : 1 : r[e].localeCompare ? r[e].localeCompare(t[e]) : 1
                    }
                }, e.sorters.number = function (e, t) {
                    var o = "asc" === t;
                    return function (t, r) {
                        return o ? t[e] - r[e] : r[e] - t[e]
                    }
                }, e.sorters.date = function (e, t) {
                    var o = "asc" === t;
                    return function (t, r) {
                        return o ? new Date(t[e]).getTime() - new Date(r[e]).getTime() : new Date(r[e]).getTime() - new Date(t[e]).getTime()
                    }
                }
            }
        }.apply(t, r)) && (e.exports = n)
    }])
});
//# sourceMappingURL=canvas-datagrid.mapx