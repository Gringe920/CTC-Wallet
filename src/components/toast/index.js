/**
 * this.$toast.show('your text')
 */
import Vue from 'vue'
import ToastComponent from './toast'

let toastNode = null,
    showToast = false,
    timer = null;
const ToastContructor = Vue.extend(ToastComponent)

const toast = {
    install: (Vue, options) => {
        const option = {
            duration: '3000'
        }
        for (let o in options) {
            option[o] = options[o]
        }
        Vue.prototype.$toast = (content, type) => {
            if (type == 'hide') {
                toastNode.isShowToast = showToast = false;
            } else {
                if (!toastNode) {
                    toastNode = new ToastContructor({
                        data: {
                            isShowToast: showToast,
                            content
                        }
                    })
                    toastNode.$mount();
                    document.body.appendChild(toastNode.$el)
                }
                toastNode.content = content;
                toastNode.isShowToast = showToast = true;
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    toastNode.isShowToast = showToast = false
                }, option.duration)
            }
        }
        ['show', 'hide'].forEach((type) => {
            Vue.prototype.$toast[type] = (tips) => {
                return Vue.prototype.$toast(tips, type)
            }
        })
    }
}

export default toast;