// JavaScript 是用來讓網頁具有互動功能的程式語言

// 主要抽籤功能函數 - 當使用者點擊「給我好運」按鈕時執行
function getFortune() {
    // 使用 document.querySelector() 來選取 HTML 元素
    const btn = document.querySelector('.fortune-btn');      // 選取幸運按鈕
    const machine = document.querySelector('.cookie-machine'); // 選取餅乾機圖片
    
    // 播放搖晃音效 - 呼叫在 audio.js 中定義的函數
    playShakeSound();
    
    // 為餅乾機添加震動動畫效果，並為整個頁面加上迪斯可模式
    machine.style.animation = 'machineShake 5.5s ease-in-out'; // CSS 動畫：搖晃 5.5 秒
    document.body.classList.add('disco-mode'); // 在 body 元素上添加 CSS 類別，啟動迪斯可效果
    
    // setTimeout() 用來延遲執行程式碼，這裡延遲 5.5 秒後執行
    setTimeout(() => {
        // 取得隨機的幸運籤文 - 呼叫在 fortune.js 中定義的函數
        const fortune = getRandomFortune();
        
        // 播放籤文音效
        playFortuneSound();
        
        // 準備要顯示在彈出視窗中的 HTML 內容
        let htmlContent = '';
        
        // 如果不是第一次抽籤且有上一次的運勢，就顯示在上方
        // isFirstFortune 和 previousFortune 是全域變數，在其他檔案中定義
        if (!isFirstFortune && previousFortune) {
            // 使用模板字串 (``) 來組合 HTML 字串
            htmlContent += `<div style="background: #f0f0f0; padding: 8px; margin-bottom: 15px; border-radius: 5px; font-size: 0.8em; color: #666;">
                <strong>Today's Fortune：</strong><br>
                ${previousFortune.content.replace('今日運勢：', '')}
            </div>`;
        }
        
        // 處理籤文內容：
        // .replace(/\n/g, '<br>') - 將換行符號轉換成 HTML 的 <br> 標籤
        // .replace(/- ([^<]+)$/, '...') - 將最後一行以「- 」開頭的文字加上特殊樣式
        htmlContent += fortune.content.replace(/\n/g, '<br>').replace(/- ([^<]+)$/, '<div style="text-align: center; margin-top: 10px;">- $1</div>');
        
        // 使用 SweetAlert2 庫顯示美觀的彈出視窗
        Swal.fire({
            title: fortune.category,              // 彈出視窗標題（籤文類別）
            html: htmlContent,                    // 彈出視窗內容（使用 HTML 格式）
            iconHtml: '🍪',                      // 自訂圖示（餅乾表情符號）
            confirmButtonText: '再來一次',        // 確認按鈕文字
            confirmButtonColor: '#ff5a78',       // 確認按鈕顏色（粉紅色）
            showCancelButton: true,              // 顯示取消按鈕
            cancelButtonText: '分享',            // 取消按鈕文字（實際上是分享功能）
            cancelButtonColor: '#3085d6',        // 取消按鈕顏色（藍色）
            background: '#fff8e1',               // 彈出視窗背景顏色（淡黃色）
            color: '#5d4037',                    // 文字顏色（咖啡色）
            showClass: {                         // 顯示動畫設定
                popup: 'animate__animated animate__bounceIn'  // 彈跳進入動畫
            },
            hideClass: {                         // 隱藏動畫設定
                popup: 'animate__animated animate__fadeOut'   // 淡出動畫
            },
            customClass: {                       // 自訂 CSS 類別
                icon: 'swal2-cookie-icon',       // 圖示樣式
                confirmButton: 'comic-brutal-button',  // 確認按鈕樣式
                cancelButton: 'comic-brutal-button'    // 取消按鈕樣式
            },
            didOpen: () => {                     // 彈出視窗開啟後執行的函數
                // 重新設定按鈕文字和功能
                const confirmBtn = document.querySelector('.swal2-confirm'); // 選取確認按鈕
                const cancelBtn = document.querySelector('.swal2-cancel');   // 選取取消按鈕
                if (confirmBtn) {
                    confirmBtn.innerHTML = 'Play Again';  // 設定按鈕文字
                }
                if (cancelBtn) {
                    cancelBtn.innerHTML = 'Share';       // 設定按鈕文字
                    // 為分享按鈕添加點擊事件監聽器
                    cancelBtn.addEventListener('click', () => {
                        shareContent(fortune, previousFortune); // 呼叫分享功能
                    });
                }
            }
        }).then((result) => {  // 處理彈出視窗關閉後的動作
            // 如果是點擊分享按鈕關閉的（cancel），則不執行任何動作
            if (result.dismiss === Swal.DismissReason.cancel) {
                return false;
            }
        });
        
        // 重置動畫效果
        machine.style.animation = 'pulse 2s ease-in-out infinite'; // 恢復脈動動畫
        document.body.classList.remove('disco-mode');              // 移除迪斯可模式
    }, 5500); // 5.5 秒後執行上述程式碼
}

// 網頁載入完成後自動執行的程式碼
window.addEventListener('load', () => {
    // 延遲 0.5 秒後檢查音樂狀態
    setTimeout(() => {
        // 如果有背景音樂但處於暫停狀態，就繼續播放
        if (window.gameMusic && window.gameMusic.paused) {
            window.gameMusic.play().catch(e => console.log('繼續播放音樂失敗:', e));
        } else if (!window.gameMusic) {
            // 如果沒有音樂物件，就開始播放背景音樂
            playBackgroundMusic();
        }
    }, 500);
});

// 點擊頁面任意地方時嘗試播放音樂（解決瀏覽器自動播放限制）
document.addEventListener('click', () => {
    // 如果音樂存在但被暫停，就播放音樂
    if (window.gameMusic && window.gameMusic.paused) {
        window.gameMusic.play().catch(e => console.log('音樂播放失敗:', e));
    }
}, { once: true }); // { once: true } 表示這個事件監聽器只會執行一次

// 分享功能函數 - 將籤文內容複製到剪貼簿
function shareContent(currentFortune, todayFortune) {
    // console.log() 用來在瀏覽器開發者工具中顯示訊息，方便除錯
    console.log('currentFortune:', currentFortune);  // 顯示當前籤文
    console.log('todayFortune:', todayFortune);      // 顯示今日運勢
    
    // 處理今日運勢文字
    let todayFortuneText = '未知'; // 預設值
    if (todayFortune && todayFortune.content) {
        // 移除「今日運勢：」前綴並去除首尾空格
        todayFortuneText = todayFortune.content.replace('今日運勢：', '').trim();
    } else if (previousFortune && previousFortune.content) {
        // 如果沒有今日運勢，就使用之前的運勢
        todayFortuneText = previousFortune.content.replace('今日運勢：', '').trim();
    }
    
    // 處理當前籤文文字
    let currentFortuneText = '未知'; // 預設值
    if (currentFortune && currentFortune.content) {
        // 將 HTML 的 <br> 標籤轉換回換行符號，並移除所有 HTML 標籤
        currentFortuneText = currentFortune.content.replace(/<br>/g, '\n').replace(/<[^>]*>/g, '').trim();
        // 如果是名人金句，縮短人名部分的格式
        if (currentFortune.category && currentFortune.category.includes('名人金句')) {
            currentFortuneText = currentFortuneText.replace(/\n\n- (.+)$/, '\n- $1');
        }
    }
    
    // 組合分享的文字內容，使用餅乾表情符號作為裝飾框
    const shareText = `🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪
🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪

今日運勢：
${todayFortuneText}

${currentFortune.category || '未知'}：
${currentFortuneText}

參觀tasksnap官網：
https://tasksnap-ytmctx95gflwfq9pxzje2z.streamlit.app/

🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪
🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪`;
    
    console.log('shareText:', shareText); // 在控制台顯示分享文字
    
    // 使用現代瀏覽器的剪貼簿 API 來複製文字
    navigator.clipboard.writeText(shareText).then(() => {
        // 成功複製後顯示成功訊息
        Swal.fire({
            title: 'Copied to Clipboard!',
            text: 'Feel free to share it on social media!',
            icon: 'success',              // 成功圖示
            timer: 2000,                  // 2 秒後自動關閉
            showConfirmButton: false,     // 不顯示確認按鈕
            customClass: {
                popup: 'share-success-popup'  // 自訂樣式類別
            }
        });
    }).catch(err => {
        // 如果剪貼簿 API 失敗，使用備用方案
        console.log('複製失敗:', err);
        
        // 備用方案：建立隱藏的文字區域來複製文字
        const textArea = document.createElement('textarea'); // 建立 textarea 元素
        textArea.value = shareText;                         // 設定要複製的文字
        document.body.appendChild(textArea);                // 將元素加入頁面
        textArea.select();                                  // 選取文字
        try {
            // 使用舊版的複製指令
            document.execCommand('copy');
            Swal.fire({
                title: '已複製到剪貼簿！',
                text: '可以貼到社交媒體分享囉！',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            });
        } catch (fallbackErr) {
            // 如果所有複製方法都失敗，就顯示文字讓使用者手動複製
            alert('複製失敗，請手動複製以下內容：\n\n' + shareText);
        }
        document.body.removeChild(textArea); // 移除建立的元素
    });
}

// 返回按鈕功能函數 - 回到首頁
function goBack() {
    // 重置遊戲狀態 - 呼叫在其他檔案中定義的函數
    resetGameState();
    
    // 保持音樂播放狀態，使用 sessionStorage 來暫存資料
    if (window.gameMusic && !window.gameMusic.paused) {
        // sessionStorage 用來在同一個瀏覽器分頁期間儲存資料
        sessionStorage.setItem('musicPlaying', 'true');            // 記錄音樂正在播放
        sessionStorage.setItem('musicTime', window.gameMusic.currentTime); // 記錄目前播放時間
    }
    
    // 跳轉到首頁
    window.location.href = 'index.html';
}