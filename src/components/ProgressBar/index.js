import './scss/progressbar.scss'
export default function ProgressBar({percent}){
    return (
        <div className="progressBar" style={{
            "--progress-value" : percent+"%"
        }}>
        </div>
    )
}