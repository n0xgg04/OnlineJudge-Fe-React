import './scss/styles.scss'
import react, {useState} from 'react'
import doneTaskIcon from './assets/images/task-done-flat.svg'
import {SiTask} from 'react-icons/si'
import {ImFolderUpload} from 'react-icons/im'
import { MdStars } from "react-icons/md";
import Editor from "@monaco-editor/react";
import {languageOptions} from './languageOptions.js'
import {defineTheme} from './lib/mocanoTheme'

export default function MainBox({children}){
    const [code, setCode] = useState(
        `function add(a, b) {\n  return a + b;\n}`
    );
    const [theme, setTheme] = useState("oceanic-next");
    const [language, setLanguage] = useState(languageOptions[0].value);
    defineTheme(theme.value).then((_) => setTheme("spacecadet"));

    const handleEditorChange = (value) => {
        setCode(value);
    };

    return (
        <>
            <div className="mainBox-all">
                <div className="mainBox">
                    <div className="mainBox-container">
                        <div className="mainBox-container_left glassBox">
                            <div className="mainBox-container_left-heading">
                                <div className="mainBox-container_left-heading--problem">
                                    <SiTask style={{
                                        fontSize : "1.5rem"
                                    }}></SiTask>
                                    <h1>Covid-19’s ending</h1>
                                </div>
                                <div className="mainBox-container_left-heading--pob">
                                    <div className="mainBox-container_left-heading--diff">
                                        <span className="easy">Dễ</span>
                                    </div>
                                    <div className="mainBox-container_left-heading--point">
                                        <MdStars className="starPoint"></MdStars>
                                        <span className="point">100</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mainBox-container_left-problem">
                                <div className="mainBox-container_left-problem--container">
                                        <span>Tình hình là Bi với Lema ngồi chết dí ở nhà quá lâu rồi, nếu dịch bệnh này chưa được dẹp yên, 2 đứa sẽ chẳng thể gặp được nhau. Thế là trong lúc rảnh rỗi, Bi đã đưa ra 1 giả thuyết về cái kết của dịch bệnh. Giả thuyết cho rằng có một số lượng S người ngoài xã hội đang có mầm bệnh bên trong người. Mỗi ngày, vào buổi sáng, sẽ có một số lượng A người được phát hiện và cho vào khu vực cách ly, tuy nhiên vào ban đêm, sẽ có B người bị lây nhiễm từ những người có mầm bệnh nằm ngoài khu cách ly. Dịch bệnh sẽ được chặn đứng nếu không còn người bị bệnh nào ngoài xã hội. Các bạn hãy tính dùm Bi số ngày cần thiết để dịch bệnh được chặn đứng nhé! Giả sử cho giá trị A và B là không đổi, chỉ có buổi sáng mới diễn ra hành động cách ly và chỉ có ban đêm dịch mới lây lan được.
    1 dòng duy nhất in ra số ngày cần thiết.Tình hình là Bi với Lema ngồi chết dí ở nhà quá lâu rồi, nếu dịch bệnh này chưa được dẹp yên, 2 đứa sẽ chẳng thể gặp được nhau. Thế là trong lúc rảnh rỗi, Bi đã đưa ra 1 giả thuyết về cái kết của dịch bệnh. Giả thuyết cho rằng có một số lượng S người ngoài xã hội đang có mầm bệnh bên trong người. Mỗi ngày, vào buổi sáng, sẽ có một số lượng A người được phát hiện và cho vào khu vực cách ly, tuy nhiên vào ban đêm, sẽ có B người bị lây nhiễm từ những người có mầm bệnh nằm ngoài khu cách ly. Dịch bệnh sẽ được chặn đứng nếu không còn người bị bệnh nào ngoài xã hội. Các bạn hãy tính dùm Bi số ngày cần thiết để dịch bệnh được chặn đứng nhé! Giả sử cho giá trị A và B là không đổi, chỉ có buổi sáng mới diễn ra hành động cách ly và chỉ có ban đêm dịch mới lây lan được.
    1 dòng duy nhất in ra số ngày cần thiết.Tình hình là Bi với Lema ngồi chết dí ở nhà quá lâu rồi, nếu dịch bệnh này chưa được dẹp yên, 2 đứa sẽ chẳng thể gặp được nhau. Thế là trong lúc rảnh rỗi, Bi đã đưa ra 1 giả thuyết về cái kết của dịch bệnh. Giả thuyết cho rằng có một số lượng S người ngoài xã hội đang có mầm bệnh bên trong người. Mỗi ngày, vào buổi sáng, sẽ có một số lượng A người được phát hiện và cho vào khu vực cách ly, tuy nhiên vào ban đêm, sẽ có B người bị lây nhiễm từ những người có mầm bệnh nằm ngoài khu cách ly. Dịch bệnh sẽ được chặn đứng nếu không còn người bị bệnh nào ngoài xã hội. Các bạn hãy tính dùm Bi số ngày cần thiết để dịch bệnh được chặn đứng nhé! Giả sử cho giá trị A và B là không đổi, chỉ có buổi sáng mới diễn ra hành động cách ly và chỉ có ban đêm dịch mới lây lan được.
    1 dòng duy nhất in ra số ngày cần thiết.Tình hình là Bi với Lema ngồi chết dí ở nhà quá lâu rồi, nếu dịch bệnh này chưa được dẹp yên, 2 đứa sẽ chẳng thể gặp được nhau. Thế là trong lúc rảnh rỗi, Bi đã đưa ra 1 giả thuyết về cái kết của dịch bệnh. Giả thuyết cho rằng có một số lượng S người ngoài xã hội đang có mầm bệnh bên trong người. Mỗi ngày, vào buổi sáng, sẽ có một số lượng A người được phát hiện và cho vào khu vực cách ly, tuy nhiên vào ban đêm, sẽ có B người bị lây nhiễm từ những người có mầm bệnh nằm ngoài khu cách ly. Dịch bệnh sẽ được chặn đứng nếu không còn người bị bệnh nào ngoài xã hội. Các bạn hãy tính dùm Bi số ngày cần thiết để dịch bệnh được chặn đứng nhé! Giả sử cho giá trị A và B là không đổi, chỉ có buổi sáng mới diễn ra hành động cách ly và chỉ có ban đêm dịch mới lây lan được.
    1 dòng duy nhất in ra số ngày cần thiết.Tình hình là Bi với Lema ngồi chết dí ở nhà quá lâu rồi, nếu dịch bệnh này chưa được dẹp yên, 2 đứa sẽ chẳng thể gặp được nhau. Thế là trong lúc rảnh rỗi, Bi đã đưa ra 1 giả thuyết về cái kết của dịch bệnh. Giả thuyết cho rằng có một số lượng S người ngoài xã hội đang có mầm bệnh bên trong người. Mỗi ngày, vào buổi sáng, sẽ có một số lượng A người được phát hiện và cho vào khu vực cách ly, tuy nhiên vào ban đêm, sẽ có B người bị lây nhiễm từ những người có mầm bệnh nằm ngoài khu cách ly. Dịch bệnh sẽ được chặn đứng nếu không còn người bị bệnh nào ngoài xã hội. Các bạn hãy tính dùm Bi số ngày cần thiết để dịch bệnh được chặn đứng nhé! Giả sử cho giá trị A và B là không đổi, chỉ có buổi sáng mới diễn ra hành động cách ly và chỉ có ban đêm dịch mới lây lan được.
    1 dòng duy nhất in ra số ngày cần thiết.Tình hình là Bi với Lema ngồi chết dí ở nhà quá lâu rồi, nếu dịch bệnh này chưa được dẹp yên, 2 đứa sẽ chẳng thể gặp được nhau. Thế là trong lúc rảnh rỗi, Bi đã đưa ra 1 giả thuyết về cái kết của dịch bệnh. Giả thuyết cho rằng có một số lượng S người ngoài xã hội đang có mầm bệnh bên trong người. Mỗi ngày, vào buổi sáng, sẽ có một số lượng A người được phát hiện và cho vào khu vực cách ly, tuy nhiên vào ban đêm, sẽ có B người bị lây nhiễm từ những người có mầm bệnh nằm ngoài khu cách ly. Dịch bệnh sẽ được chặn đứng nếu không còn người bị bệnh nào ngoài xã hội. Các bạn hãy tính dùm Bi số ngày cần thiết để dịch bệnh được chặn đứng nhé! Giả sử cho giá trị A và B là không đổi, chỉ có buổi sáng mới diễn ra hành động cách ly và chỉ có ban đêm dịch mới lây lan được.
    1 dòng duy nhất in ra số ngày cần thiết.Tình hình là Bi với Lema ngồi chết dí ở nhà quá lâu rồi, nếu dịch bệnh này chưa được dẹp yên, 2 đứa sẽ chẳng thể gặp được nhau. Thế là trong lúc rảnh rỗi, Bi đã đưa ra 1 giả thuyết về cái kết của dịch bệnh. Giả thuyết cho rằng có một số lượng S người ngoài xã hội đang có mầm bệnh bên trong người. Mỗi ngày, vào buổi sáng, sẽ có một số lượng A người được phát hiện và cho vào khu vực cách ly, tuy nhiên vào ban đêm, sẽ có B người bị lây nhiễm từ những người có mầm bệnh nằm ngoài khu cách ly. Dịch bệnh sẽ được chặn đứng nếu không còn người bị bệnh nào ngoài xã hội. Các bạn hãy tính dùm Bi số ngày cần thiết để dịch bệnh được chặn đứng nhé! Giả sử cho giá trị A và B là không đổi, chỉ có buổi sáng mới diễn ra hành động cách ly và chỉ có ban đêm dịch mới lây lan được.
    1 dòng duy nhất in ra số ngày cần thiết.Tình hình là Bi với Lema ngồi chết dí ở nhà quá lâu rồi, nếu dịch bệnh này chưa được dẹp yên, 2 đứa sẽ chẳng thể gặp được nhau. Thế là trong lúc rảnh rỗi, Bi đã đưa ra 1 giả thuyết về cái kết của dịch bệnh. Giả thuyết cho rằng có một số lượng S người ngoài xã hội đang có mầm bệnh bên trong người. Mỗi ngày, vào buổi sáng, sẽ có một số lượng A người được phát hiện và cho vào khu vực cách ly, tuy nhiên vào ban đêm, sẽ có B người bị lây nhiễm từ những người có mầm bệnh nằm ngoài khu cách ly. Dịch bệnh sẽ được chặn đứng nếu không còn người bị bệnh nào ngoài xã hội. Các bạn hãy tính dùm Bi số ngày cần thiết để dịch bệnh được chặn đứng nhé! Giả sử cho giá trị A và B là không đổi, chỉ có buổi sáng mới diễn ra hành động cách ly và chỉ có ban đêm dịch mới lây lan được.
    1 dòng duy nhất in ra số ngày cần thiết.Tình hình là Bi với Lema ngồi chết dí ở nhà quá lâu rồi, nếu dịch bệnh này chưa được dẹp yên, 2 đứa sẽ chẳng thể gặp được nhau. Thế là trong lúc rảnh rỗi, Bi đã đưa ra 1 giả thuyết về cái kết của dịch bệnh. Giả thuyết cho rằng có một số lượng S người ngoài xã hội đang có mầm bệnh bên trong người. Mỗi ngày, vào buổi sáng, sẽ có một số lượng A người được phát hiện và cho vào khu vực cách ly, tuy nhiên vào ban đêm, sẽ có B người bị lây nhiễm từ những người có mầm bệnh nằm ngoài khu cách ly. Dịch bệnh sẽ được chặn đứng nếu không còn người bị bệnh nào ngoài xã hội. Các bạn hãy tính dùm Bi số ngày cần thiết để dịch bệnh được chặn đứng nhé! Giả sử cho giá trị A và B là không đổi, chỉ có buổi sáng mới diễn ra hành động cách ly và chỉ có ban đêm dịch mới lây lan được.
    1 dòng duy nhất in ra số ngày cần thiết.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mainBox-container_right glassBox">
                            <div className="mainBox-container_right-head">
                                <div className="mainBox-container_right-head__chooseLang">
                                    <select class="mainBox-container_right-head__chooselangSelect" value={language} onChange={(event) => {
                                        setLanguage(event.target.value)
                                    }}>
                                        {
                                            languageOptions.map((item) => <option key={item.key} value={item.value}>{item.label}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="mainBox-container_right-head_upload">
                                    <button class="mainBox-container_right-head_uploadButton">
                                        <ImFolderUpload style={{
                                            marginRight : "5px",
                                            fontSize : "0.9rem"
                                        }}>

                                        </ImFolderUpload>
                                        <span>Upload</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mainBox-container_right-code">
                                <Editor
                                    width={`100%`}
                                    height="65vh"
                                    language={language || "javascript"}
                                    value={code}
                                    theme="vs-dark"
                                    className="codeEditor"
                                    style={{
                                        backgroundColor: "transparent"
                                    }}
                                    backgroundColor = "transparent"
                                    defaultValue="// some comment"
                                    onChange={handleEditorChange}
                                />
                                <div className="mainBox-container_right-code-sub">
                                    <div className="mainBox-container_right-code-sub-left">

                                    </div>
                                    <div className="mainBox-container_right-code-sub-right">
                                        <button>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}