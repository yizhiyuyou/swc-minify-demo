import swc from '@swc/core';

async function minify() {
  const { code } = await swc.minify(`
      (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        let _liteContractCode = null;

        async function showPopup({ mallId }) {
            try {
                console.log({
                  mallId: mallId,
                })
            } catch (e) {
                console.log(e)
            }
        }

        const liteContractHelper = {
            showPopup,
            get liteContractCode () {
                return _liteContractCode;
            }
        };

        var helper = (liteContractHelper);

        helper.showPopup({ mallId: 1 })
      })();
    `, {
    compress: true,
    mangle: true
  });

  console.log('code:', code);
}

minify();