(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Contact/Contact.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Contact/Contact.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    errors: Object
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      }),
      loading: false
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      this.loading = true;
      this.form.post(route("new-contact")).then(function (response) {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Contact/Contact.vue?vue&type=template&id=165425f8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Contact/Contact.vue?vue&type=template&id=165425f8& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("LayautFrontendNav", [
    _c("div", [
      _c(
        "div",
        {
          staticClass: "py-4 text-center text-white blue-gradient",
          attrs: { id: "mdb-intro" }
        },
        [
          _c("h1", { staticClass: "h4 fw-bold mb-3" }, [_vm._v("Contactos")]),
          _vm._v(" "),
          _c("h5", [
            _vm._v(
              "Realizamos nuestros trabajos en base a los requerimientos que necesitas  con tecnología actualizada. "
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mx-5 row my-5" }, [
        _c("div", { staticClass: "col-sm-6" }, [
          _c(
            "div",
            { staticClass: "embed-responsive embed-responsive-16by9" },
            [
              _c("iframe", {
                staticClass: "embed-responsive-item",
                attrs: {
                  src:
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7978.297361125969!2d-78.59012156160483!3d-1.0497545534980437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4df497e4f888b608!2sSOYSOFTWARE!5e0!3m2!1ses!2sec!4v1613591251819!5m2!1ses!2sec",
                  allowfullscreen: "",
                  "aria-hidden": "false",
                  tabindex: "0"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6 text-dark" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onSubmit($event)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "form-outline mb-4" },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.nombre,
                        expression: "form.nombre"
                      }
                    ],
                    staticClass: "form-control  border",
                    attrs: { type: "text", id: "form4Example1" },
                    domProps: { value: _vm.form.nombre },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "nombre", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-label",
                      attrs: { for: "form4Example1" }
                    },
                    [_vm._v("Nombres")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.errors.nombre, function(error, index) {
                    return error
                      ? _c("div", { key: index, staticClass: "text-danger" }, [
                          _vm._v(_vm._s(error))
                        ])
                      : _vm._e()
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-outline mb-4" },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email"
                      }
                    ],
                    staticClass: "form-control border",
                    attrs: { type: "email", id: "form4Example2" },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-label",
                      attrs: { for: "form4Example2" }
                    },
                    [_vm._v("Email")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.errors.email, function(error, index) {
                    return error
                      ? _c("div", { key: index, staticClass: "text-danger" }, [
                          _vm._v(_vm._s(error))
                        ])
                      : _vm._e()
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-outline mb-4" },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.asunto,
                        expression: "form.asunto"
                      }
                    ],
                    staticClass: "form-control  border",
                    attrs: { type: "text", id: "form4Example15" },
                    domProps: { value: _vm.form.asunto },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "asunto", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-label",
                      attrs: { for: "form4Example15" }
                    },
                    [_vm._v("Asunrto")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.errors.asunto, function(error, index) {
                    return error
                      ? _c("div", { key: index, staticClass: "text-danger" }, [
                          _vm._v(_vm._s(error))
                        ])
                      : _vm._e()
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-outline mb-4" },
                [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.mensaje,
                        expression: "form.mensaje"
                      }
                    ],
                    staticClass: "form-control border",
                    attrs: { id: "form4Example3", rows: "4" },
                    domProps: { value: _vm.form.mensaje },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "mensaje", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-label",
                      attrs: { for: "form4Example3" }
                    },
                    [_vm._v("Mensaje")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.errors.mensaje, function(error, index) {
                    return error
                      ? _c("div", { key: index, staticClass: "text-danger" }, [
                          _vm._v(_vm._s(error))
                        ])
                      : _vm._e()
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-block mb-3",
                  attrs: {
                    type: "submit",
                    size: "sm",
                    variant: "primary",
                    disabled: _vm.loading
                  }
                },
                [
                  _c("span", [
                    !_vm.loading
                      ? _c("em", {
                          staticClass: "icon ni ni-navigate-fill mr-1"
                        })
                      : _vm._e(),
                    _vm._v(" Enviar")
                  ])
                ]
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Contact/Contact.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Contact/Contact.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_165425f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=165425f8& */ "./resources/js/Pages/Contact/Contact.vue?vue&type=template&id=165425f8&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Contact/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_165425f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_165425f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Contact/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Contact/Contact.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Contact/Contact.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Contact/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Contact/Contact.vue?vue&type=template&id=165425f8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Contact/Contact.vue?vue&type=template&id=165425f8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_165425f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=165425f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Contact/Contact.vue?vue&type=template&id=165425f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_165425f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_165425f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);