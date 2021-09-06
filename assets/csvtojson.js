function lineSeparator(csv) {
    const reg = new RegExp(/\n/g);
    res = csv.split(reg).filter(item => !!(item?.trim()))
    console.log('res', res);
}

function columnSeparator(line) {
    const reg = new RegExp(/( )|"(.*)"/g);
    const headers = [
        "epoch",
        "type_log",
        "ip",
        "host",
        "status_code_1",
        "method",
        "protocol",
        "collector",
        "trigger_page_url",
        "response_time",
        "status_code_2",
        "user_agent",
        "hash",
    ];
    const res = line.split(reg).filter(item => !!(item?.trim()))
        .reduce((acc, curr, idx) => ({ ...acc, [headers[idx]]: curr }), {});
    console.log('res', res);
}